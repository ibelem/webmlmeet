class Renderer {
  constructor(canvas) {
    this.gl = canvas.getContext('webgl2');
    gl = this.gl
    if (this.gl === null) {
      throw new Error('Unable to initialize WebGL.');
    }

    this.guidedFilter = new GuidedFilter(this.gl);
    this.utils = new WebGLUtils(this.gl);

    this.shaders = {};

    this._segMap = null;
    this._predictions = null;
    this._fixedSize = 513;
    this._clippedSize = [this._fixedSize, this._fixedSize];
    this._imageSource = null;

    // UI state
    this._zoom = 1;
    this._blurRadius = 30;
    this._backgroundImageSource = null;
    let kernel1D = this._generateGaussianKernel1D(this._blurRadius * 2 + 1);
    this._halfKernel = kernel1D.slice(this._blurRadius); // take the second half
    this._guidedFilterRadius = 0;
  }

  get zoom() {
    return this._zoom;
  }

  set zoom(val) {
    this._zoom = val;

    // all FRAMEBUFFERs should be reconfigured when zooming
    this.setup().then(_ => this.drawOutputs(this._segMap));
  }

  get blurRadius() {
    return this._blurRadius;
  }

  set blurRadius(radius) {
    if (this._blurRadius === radius)
      return;

    this._blurRadius = radius;
    let kernelSize = radius * 2 + 1;
    let kernel1D = this._generateGaussianKernel1D(kernelSize, 25);
    // take the second half
    this._halfKernel = kernel1D.slice(radius);

    this._setupBlurShader();
    this.drawOutputs(this._segMap);
  }

  get effect() {
    return this._effect;
  }

  set effect(val) {
    this._effect = val;

    // shaders need to be rewired when changing effect
    this.setup().then(_ => this.drawOutputs(this._segMap));
  }

  get refineEdgeRadius() {
    return this._guidedFilterRadius;
  }

  set refineEdgeRadius(radius) {
    this._guidedFilterRadius = radius;

    this.guidedFilter.setup(
      this._guidedFilterRadius,
      1e-6,
      this._clippedSize[0] * this._zoom,
      this._clippedSize[1] * this._zoom
    );
    this.setup().then(_ => this.drawOutputs(this._segMap));
  }

  get backgroundImageSource() {
    return this._backgroundImageSource;
  }

  set backgroundImageSource(src) {
    this._backgroundImageSource = src;

    this._setupImageShader();
    this.drawOutputs(this._segMap);
  }

  async setup() {

    //
    // I. Display color labels
    //                                              
    // +------+                                    ============  +---------+       
    // |  im  |--.                                 |  Shader  |  | Texture |      
    // +------+  |  ============  +-----+          ============  +---------+   
    //           |->| colorize |->| out |           
    // +------+  |  |  Shader  |  +-----+                    
    // | pred |--'  ============
    // +------+                 
    //
    //
    // II. Person segmentation
    //
    // +------+                     +----+
    // |  im  |--.               .->| fg |----------------------------.
    // +------+  |  ===========  |  +----+                            |  =========  +-----+
    //           |->| extract |--|                                    |->| blend |->| out |
    // +------+  |  ===========  |  +----+  ========                  |  =========  +-----+
    // | pred |--'               '->| bg |->| blur |->|\              |
    // +------+                     +----+  ========  | |             |
    //                                      ========  | |  +--------+ |
    //                                      | fill |->| |->| styled |-'
    //                                      ========  | |  |   Bg   |
    //                         +---------+  ========  | |  +--------+                                  
    //                         | bgImage |->| img  |->|/
    //                         +---------+  ========
    //
    //
    //           _____________________________________________
    //          | two-pass Gaussian blur                      |
    //          |                                             |
    // +----+   |  ==========    +------------+   ==========  |    +----------+
    // | bg |---|->|  blur  |--> | blurFirst  |-->|  blur  |--|--> | styledBg |
    // +----+   |  | Shader |    | PassResult |   | Shader |  |    +----------+   
    //          |  ==========    +------------+   ==========  |
    //          |_____________________________________________|
    //

    this.guidedFilter.setup(
      this._guidedFilterRadius,
      1e-6,
      this._clippedSize[0] * this._zoom,
      this._clippedSize[1] * this._zoom
    );

    this.utils.setup2dQuad();

    switch (this._effect) {
      case 'none': {
        this._setupExtractShader();
        this._setupNoneShader();
        this._setupBlendShader();
      } break;
      case 'blur': {
        this._setupExtractShader();
        this._setupBlurShader();
        this._setupBlendShader();
      } break;
      case 'image': {
        this._setupExtractShader();
        this._setupImageShader();
        this._setupBlendShader();
      } break;
      case 'fill': {
        this._setupExtractShader();
        this._setupFillShader();
        this._setupBlendShader();
      } break;
      default: {
        console.warn('Unknown effect');
      }
    }
    // this.utils.freeze();
  }

  _setupExtractShader() {

    // When guided filter pre-processing is disabled, raw mask is used as input
    // However, raw mask texture is slightly biased and horizontally flipped
    const vsWithoutPreprocess =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;
      out vec2 v_maskcord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, -0.5) + 0.5;
        v_maskcord = v_texcoord;
      }`;

    const vsWithPreprocess =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;
      out vec2 v_maskcord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, -0.5) + 0.5;
        v_maskcord = a_pos.xy * vec2(0.5, 0.5) + 0.5;
      }`;

    const fs =
      `#version 300 es
      precision highp float;
      layout(location = 0) out vec4 fg_color;
      layout(location = 1) out vec4 bg_color;

      uniform sampler2D u_mask;
      uniform sampler2D u_image;

      in vec2 v_maskcord;
      in vec2 v_texcoord;

      void main() {
        float fg_alpha = texture(u_mask, v_maskcord).a;
        float bg_alpha = 1.0 - fg_alpha;

        vec4 pixel = texture(u_image, v_texcoord);
        fg_color = vec4(pixel.xyz * fg_alpha, fg_alpha);
        bg_color = vec4(pixel.xyz * bg_alpha, bg_alpha);
      }`;

    if (this._guidedFilterRadius === 0) {
      // guided filter is disabled
      this.shaders.extract = new Shader(this.gl, vsWithoutPreprocess, fs);
    } else {
      this.shaders.extract = new Shader(this.gl, vsWithPreprocess, fs);
    }

    if (typeof this.utils.getTexture('image') === 'undefined') {
      this.utils.createAndBindTexture({
        name: 'image',
        filter: this.gl.LINEAR,
      });
    }

    this.utils.createAndBindTexture({
      name: 'predictions',
      filter: this.gl.NEAREST,
    });

    this.utils.createTexInFrameBuffer('extract',
      [{
        name: 'fg',
        width: this._clippedSize[0] * this._zoom,
        height: this._clippedSize[1] * this._zoom,
      }, {
        name: 'bg',
        width: this._clippedSize[0] * this._zoom,
        height: this._clippedSize[1] * this._zoom,
      }]
    );
    this.shaders.extract.use();
    this.shaders.extract.set1i('u_image', 0); // texture units 0
    this.shaders.extract.set1i('u_mask', 1); // texture units 1
  }

  _setupBlurShader() {

    const vs =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, 0.5) + 0.5;
      }`;

    const fs =
      `#version 300 es
      precision highp float;
      out vec4 out_color;
      in vec2 v_texcoord;

      uniform sampler2D bg;
      uniform bool first_pass;
      uniform float kernel[${this._blurRadius + 1}];

      // https://learnopengl.com/code_viewer_gh.php?code=src/5.advanced_lighting/7.bloom/7.blur.fs

      void main() {             
        vec2 tex_offset = 1.0 / vec2(textureSize(bg, 0)); // gets size of single texel
        vec4 bg_color = texture(bg, v_texcoord);
        vec4 result = bg_color * kernel[0];
        if (first_pass) {
          for (int i = 1; i < ${this._blurRadius + 1}; ++i) {
            result += texture(bg, v_texcoord + vec2(tex_offset.x * float(i), 0.0)) * kernel[i];
            result += texture(bg, v_texcoord - vec2(tex_offset.x * float(i), 0.0)) * kernel[i];
          }
        } else {
          for (int i = 1; i < ${this._blurRadius + 1}; ++i) {
            result += texture(bg, v_texcoord + vec2(0.0, tex_offset.y * float(i))) * kernel[i];
            result += texture(bg, v_texcoord - vec2(0.0, tex_offset.y * float(i))) * kernel[i];
          }
        }
        out_color = result;
      }`;

    this.shaders.blur = new Shader(this.gl, vs, fs);
    this.shaders.blur.use();
    this.shaders.blur.set1fv('kernel', this._halfKernel);

    this.utils.createTexInFrameBuffer('blurFirstPassResult',
      [{
        name: 'blurFirstPassResult',
        width: this._clippedSize[0] * this._zoom,
        height: this._clippedSize[1] * this._zoom,
      }]
    );

    this.utils.createTexInFrameBuffer('styledBg',
      [{
        name: 'styledBg',
        width: this._clippedSize[0] * this._zoom,
        height: this._clippedSize[1] * this._zoom,
      }]
    );
  }

  _setupFillShader() {

    const vs =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, -0.5) + 0.5;
      }`;

    const fs =
      `#version 300 es
      precision highp float;

      in vec2 v_texcoord;
      out vec4 out_color;
      uniform vec4 fill_color;

      void main() {
        // solid color background
        out_color = fill_color;
      }`;

    this.shaders.fill = new Shader(this.gl, vs, fs);
    this.shaders.fill.use();

    // this.utils.createTexInFrameBuffer('styledBg',
    //   [{
    //     name: 'styledBg',
    //     width: this._clippedSize[0] * this._zoom,
    //     height: this._clippedSize[1] * this._zoom,
    //   }]
    // );
  }

  _setupNoneShader() {

    const vs =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, -0.5) + 0.5;
      }`;

    const fs =
      `#version 300 es
      precision highp float;

      in vec2 v_texcoord;

      void main() {
      }`;

    this.shaders.none = new Shader(this.gl, vs, fs);
    this.shaders.none.use();
  }

  _setupImageShader() {

    const vs =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, -0.5) + 0.5;
      }`;

    const fs =
      `#version 300 es
      precision highp float;

      in vec2 v_texcoord;
      out vec4 out_color;
      uniform int has_bg;
      uniform vec2 canvas_size;

      uniform sampler2D bg_image;

      void main() {
        if (has_bg != 0) {
          // stretch the background image to fit the viewport
          vec2 image_size = vec2(textureSize(bg_image, 0));
          float image_ratio = image_size.x / image_size.y;
          float canvas_ratio = canvas_size.x / canvas_size.y;
          vec2 bgcoord = (v_texcoord / image_size) * canvas_size;
          if (image_ratio > canvas_ratio) {
            bgcoord *= image_size.y / canvas_size.y;
          } else {
            bgcoord *= image_size.x / canvas_size.x;
          }
          out_color = texture(bg_image, bgcoord);
        } else {
          // checkerboard background
          vec2 offset = floor(v_texcoord * canvas_size / 5.0);
          if (mod(offset.x, 2.0) == 0.0) {
            if (mod(offset.y, 2.0) == 0.0) {
              out_color = vec4(1.0, 1.0, 1.0, 1.0);
            } else {
              out_color = vec4(0.8, 0.8, 0.8, 1.0);
            }
          } else {
            if (mod(offset.y, 2.0) != 0.0) {
              out_color = vec4(1.0, 1.0, 1.0, 1.0);
            } else {
              out_color = vec4(0.8, 0.8, 0.8, 1.0);
            }
          }
        }
      }`;

    this.shaders.image = new Shader(this.gl, vs, fs);
    this.utils.createAndBindTexture({
      name: 'bgImage'
    });
    this.utils.createTexInFrameBuffer('styledBg',
      [{
        name: 'styledBg',
        width: this._clippedSize[0] * this._zoom,
        height: this._clippedSize[1] * this._zoom,
      }]
    );

    this.shaders.image.use();
    this.shaders.image.set2f(
      'canvas_size', 
      this._clippedSize[0],
      this._clippedSize[1]
    );
    if (this._backgroundImageSource) {
      this.shaders.image.set1i('has_bg', 1);
      this.utils.bindTexture('bgImage');
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGBA,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        this._backgroundImageSource
      );
    } else {
      this.shaders.image.set1i('has_bg', 0);
    }
  }

  _setupBlendShader() {

    const vs =
      `#version 300 es
      in vec4 a_pos;
      out vec2 v_texcoord;

      void main() {
        gl_Position = a_pos;
        v_texcoord = a_pos.xy * vec2(0.5, 0.5) + 0.5;
      }`;

    const fs =
      `#version 300 es
      precision highp float;

      in vec2 v_texcoord;
      out vec4 out_color;

      uniform sampler2D fg;
      uniform sampler2D bg;
      uniform sampler2D orig;

      void main() {
        vec4 fg_color = texture(fg, v_texcoord);
        vec4 bg_color = texture(bg, v_texcoord);
        vec4 orig_color = texture(orig, vec2(v_texcoord.x, (1.0-v_texcoord.y)));
        bg_color = bg_color + (1.0 - bg_color.a) * orig_color;
        out_color = fg_color + (1.0 - fg_color.a) * bg_color;
      }`;

    this.shaders.blend = new Shader(this.gl, vs, fs);
    this.shaders.blend.use();
    this.shaders.blend.set1i('fg', 0); // texture units 0
    this.shaders.blend.set1i('bg', 1); // texture units 1
    this.shaders.blend.set1i('orig', 2); // texture units 2
  }

  async uploadNewTexture(imageSource, clippedSize) {

    if (this._clippedSize[0] !== clippedSize[0] ||
      this._clippedSize[1] !== clippedSize[1]) {
      this._clippedSize = clippedSize;
      this._zoom = this._fixedSize / this._clippedSize[0];

      // all FRAMEBUFFERs should be reconfigured when clippedSize changes 
      this.setup();
    }

    this._imageSource = imageSource;

    this.utils.bindTexture('image');
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      imageSource
    );

  }

  async drawOutputs(newSegMap) {
    if (!newSegMap)
      return;

    let start = performance.now();

    this.gl.canvas.width = this._clippedSize[0] * this._zoom;
    this.gl.canvas.height = this._clippedSize[1] * this._zoom;
    this.utils.setViewport(this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);

    // Person segmentation
    this._segMap = newSegMap;
    console.time("post-processing time");
    this._predictions = this._maskSegMapPerson(newSegMap);
    console.timeEnd("post-processing time");
    if (this._guidedFilterRadius === 0) {
      // guided filter is disabled
      this.utils.bindTexture('predictions');
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.ALPHA,
        this._clippedSize[0],
        this._clippedSize[1],
        0,
        this.gl.ALPHA,
        this.gl.UNSIGNED_BYTE,
        this._predictions
      );
    } else {
      // guided filter is enabled
      let refinedMask = this.guidedFilter.apply(
        this._imageSource,
        this._predictions,
        this._clippedSize[0],
        this._clippedSize[1]
      );
      this.utils.setTexture('predictions', refinedMask);
    }
    this._drawPerson();
 
    let elapsed = performance.now() - start;
    console.log(`Draw time: ${elapsed.toFixed(2)} ms`);
    return elapsed;
  }

  _drawPerson() {

    // feed image and mask into extract shader
    let currShader;
    this.shaders.extract.use();
    this.utils.bindFramebuffer('extract');
    this.utils.bindInputTextures(['image', 'predictions']);
    this.utils.render();

    switch (this._effect) {
      case 'blur': {
        // feed extracted background into blur shader
        currShader = this.shaders.blur;
        currShader.use();

        currShader.set1i('first_pass', 1);
        this.utils.bindFramebuffer('blurFirstPassResult');
        this.utils.bindInputTextures(['bg']);
        this.utils.render();

        currShader.set1i('first_pass', 0);
        this.utils.bindFramebuffer('styledBg');
        this.utils.bindInputTextures(['blurFirstPassResult']);
        this.utils.render();
      } break;
      case 'image': {
        // set image in image shader
        currShader = this.shaders.image;
        currShader.use();
        this.utils.bindFramebuffer('styledBg');
        this.utils.bindInputTextures(['bgImage']);
        this.utils.render();
      } break;
      case 'fill': {
        // currShader = this.shaders.fill;
        // currShader.use();
        // this.utils.bindFramebuffer('styledBg');
        this.utils.render();
      } break;
      case 'none': {
        currShader = this.shaders.none;
        currShader.use();
        this.utils.render();
      } break;
    }

    // feed into blend shader
    this.shaders.blend.use();
    this.utils.bindFramebuffer(null);
    this.utils.bindInputTextures(['fg', 'styledBg', 'image']);
    this.utils.render();
  }

  _maskSegMap(segmap) {
    const clippedHeight = this._clippedSize[1];
    const clippedWidth = this._clippedSize[0];
    const outputWidth = segmap.outputShape[1];
    const data = segmap.data;
    const mask = new Uint8Array(clippedHeight * clippedWidth);
    let i = 0;
    for (let h = 0; h < clippedHeight; h++) {
      for (let w = 0; w < clippedWidth; w++) {
        mask[i++] = data[h * outputWidth + w];
      }
    }
    return mask;
  }

  _maskSegMapPerson(segmap) {
    const PERSON_ID = 15;
    const clippedHeight = this._clippedSize[1];
    const clippedWidth = this._clippedSize[0];
    const outputWidth = segmap.outputShape[1];
    const data = segmap.data;
    const mask = new Uint8Array(clippedHeight * clippedWidth);
    let i = 0;
    for (let h = 0; h < clippedHeight; h++) {
      for (let w = 0; w < clippedWidth; w++) {
        mask[i++] = data[h * outputWidth + w] === PERSON_ID ? 255 : 0;
      }
    }
    return mask;
  }

  _generateGaussianKernel1D(kernelSize, sigma = 30) {
    const gaussian = (x, sigma) =>
      1 / (Math.sqrt(2 * Math.PI) * sigma) * Math.exp(-x * x / (2 * sigma * sigma));
    const kernel = [];
    const radius = (kernelSize - 1) / 2;
    for (let x = -radius; x <= radius; x++) {
      kernel.push(gaussian(x, sigma));
    }

    // normalize kernel
    const sum = kernel.reduce((x, y) => x + y);
    return kernel.map((x) => x / sum);
  }

  deleteAll() {
    this.utils.delete();
    this.guidedFilter.utils.delete();
  }
}