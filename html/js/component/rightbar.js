const rightbar = () => {
    const  rb =
        `
        <div id="bgscontainer">
            <div class="rb">
                <div class="title">Change background</div>
                <button type="button" id="rbclose" class="button">
                    <svg
                    class="svg-inline--fa fa-times fa-w-11"
                    viewBox="0 0 352 512"
                    >
                    <path
                        fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    ></path>
                    </svg>
                </button>
            </div>
            <div id="bgs">
                <div class="bgselector">
                    <img src="../assets/img/ssbg/00.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/01.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/02.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/03.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/04.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/05.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/06.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/07.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/08.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/09.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/10.jpg" />
                </div>
                <div class="bgselector">
                    <img src="../assets/img/ssbg/11.jpg" />
                </div>
            </div>
            <img id="bgdefault" src="../assets/img/ssbg/0.jpg" />
            <img
            id="bgpause"
            src="../assets/img/video/oneapi.jpg"
            class="dnone"
            />
            <div id="bgimage">
                <input
                    id="bgimg"
                    type="file"
                    name="f"
                    accept="image/*"
                    class="inputfile inputf"
                />
                <label for="bgimg">
                    <svg width="20" height="17" viewBox="0 0 20 17">
                    <path
                        d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"
                    ></path>
                    </svg>
                </label>
            </div>
        </div>
        `
    return rb;
}