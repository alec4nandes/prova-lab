const topElem = document.getElementById("top"),
    stickyNavBar = document.getElementById("sticky"),
    scrollDown = document.getElementById("scroll-down"),
    landing = document.getElementById("landing"),
    rotatingImages = [...document.getElementsByClassName("rotating")],
    parallaxElems = [...document.getElementsByClassName("parallax")];

window.onload = () => {
    resizeHandler({ withTimeout: false });
    transparentContentBg();
    document.body.style.visibility = "visible";
    fadeInQuote();
};

window.onresize = () => resizeHandler({ withTimeout: true });

const parallaxSetter = () =>
    parallaxElems.forEach((elem) => {
        setElemBgSize(elem);
        parallaxScrollHandler(elem);
    });

function resizeHandler({ withTimeout }) {
    sizeTop();
    withTimeout ? setTimeout(parallaxSetter, 100) : parallaxSetter();
}

document.body.onscroll = () => {
    rotatingImages.forEach(
        (elem) =>
            (elem.style.transform = `rotate(${(window.scrollY / 15) % 360}deg)`)
    );
    parallaxElems.forEach((elem) => parallaxScrollHandler(elem));
    fadeInQuote();
    topElem && navbarScrollHandler();
};

/*** FUNCTIONS ***/

// NAVBAR SCROLL

function navbarScrollHandler() {
    const cl = scrollDown.classList;
    cl.remove("shown");
    cl.remove("hidden");
    cl.add(window.scrollY > topElem.offsetHeight / 2 ? "hidden" : "shown");
}

// SIZE TOP

function sizeTop() {
    if (!topElem) return;
    const stickyHeight = stickyNavBar.offsetHeight;
    topElem.style.minHeight = window.innerHeight - stickyHeight + "px";
}

// BLOCK QUOTE FADE IN

function fadeInQuote() {
    const elem = document.getElementById("block-quote");
    if (!elem) return;
    const { classList } = elem,
        { top } = elem.getBoundingClientRect();
    if (0 <= top && isVisible(top)) {
        classList.remove("hidden");
        classList.add("shown");
    } else {
        classList.remove("shown");
        classList.add("hidden");
    }
}

// PARALLAX SCROLLING

const factor = 5;

function isSmallScreen() {
    return window.innerWidth <= 640;
}

function isShortScreen() {
    return window.innerHeight <= 500;
}

function isVisible(top) {
    return top <= window.innerHeight;
}

function parallaxScrollHandler(elem) {
    const { top } = elem.getBoundingClientRect(),
        isShort = isShortScreen(),
        isSmall = isSmallScreen();
    isVisible(top) &&
        (elem.style.backgroundPositionY = `calc(${
            elem.id === "top"
                ? isShort
                    ? "-100px"
                    : isSmall
                    ? "-10vh"
                    : "50%"
                : "50%"
        } + ${distanceFromCenter(elem) / factor}px)`);
    elem.id === "top" &&
        (elem.style.backgroundPositionX = isSmall ? "50%" : "50vw");
}

function setElemBgSize(elem) {
    const style = getComputedStyle(elem);
    elem.style.backgroundSize =
        elem.id === "top"
            ? isShortScreen()
                ? "450px"
                : isSmallScreen()
                ? "60vh"
                : "600px auto"
            : // 0.75 = 3/4 ratio
            elem.offsetWidth < elem.offsetHeight
            ? // tall and thin
              `auto calc(100% + ${
                  (window.innerHeight - elem.scrollHeight) / factor
              }px)`
            : // wide and fat
              `100% auto`;
}

function distanceFromCenter(elem) {
    const { top } = elem.getBoundingClientRect(),
        centerY = elem.offsetHeight / 2 + top;
    return window.innerHeight / 2 - centerY;
}

// TRANSPARENT CONTENT BG'S FOR FULL-BG LAYOUTS

function transparentContentBg() {
    [...document.getElementsByClassName("parallax-full-width")].forEach(
        (parent) =>
            [...parent.getElementsByClassName("has-background")].forEach(
                (child) => {
                    const bgColor =
                            getComputedStyle(child).getPropertyValue(
                                "background-color"
                            ),
                        trans = bgColor.slice(0, bgColor.length - 1) + ", 0.9)";
                    child.style.backgroundColor = trans;
                }
            )
    );
}
