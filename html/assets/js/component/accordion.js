function accordion() {
    var imgs = [
    '../assets/img/login/1.jpg',
    '../assets/img/login/2.jpg',
    '../assets/img/login/3.jpg',
    '../assets/img/login/4.jpg',
    '../assets/img/login/0.jpg'
    ],
    n = imgs.length,
    current = n-1,
    closedWidth = Math.floor(window.innerWidth/6)

    const uc = [
      "Background Blur",
      "Background Replacement",
      "Noise Suppression",
      "Intel XPU, VNNI",
      "Video Conference"
    ]

    for (var i=0; i<n; i++){
      var bgImg = document.createElement('div');
      bg.appendChild(bgImg);
      
      gsap.set(bgImg, {
        attr:{id:'bgImg'+i, class:'bgImg'},
        width:'100%',
        height:'100vh',
        backgroundImage:'url('+imgs[i]+')',
        backgroundSize:'cover',
        backgroundPosition:'center'
      })
      
      var b = document.createElement('div');
      fg.appendChild(b);
      
      gsap.fromTo(b, {
        attr:{id:'b'+i, class:'box'},
        innerHTML: `<p>${uc[i]}<sub></sub></p>`,
        width:'100%',
        height:'100%',
        borderLeft:(i>0)?'solid 1px rgba(255, 255, 255, 0.1)':'',
        backgroundColor:'rgba(250,250,250,0)',
        left:i*closedWidth,
        transformOrigin:'100% 100%',
        x:'100%'
      },{
        duration:i*0.15,
        x:0,
        ease:'expo.inOut'
      })  
      
      b.onmouseenter = b.onclick = (e)=>{    
        if (Number(e.currentTarget.id.substr(1))==current) return;
        
        var staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)));
        current = Number(e.currentTarget.id.substr(1));
        gsap.to('.box', {
          duration:0.5,
          ease:'elastic.out(0.3)',
          left:(i)=>(i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth),
          x:0,
          stagger: staggerOrder? 0.05:-0.05
        })
        
        bg.appendChild( document.getElementById('bgImg'+current) )
        gsap.fromTo('#bgImg'+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})
        gsap.fromTo('#bgImg'+current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration:1.5, ease:'sine'}) 
      }
    }

    window.onresize = (e)=>{
      closedWidth = Math.floor(window.innerWidth/10)
      gsap.set('.box', { x:0, left:(i)=> (i<=current)? i*closedWidth: window.innerWidth-((n-i)*closedWidth) })
    }
  }

  function gsapinit() {
    var url = "../assets/js/component/gsap.3.9.1.min.js";
    $.getScript(url, accordion);
  }
  document.addEventListener('DOMContentLoaded', gsapinit, false);