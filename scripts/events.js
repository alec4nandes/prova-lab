function highlightSubscribe() {
    const navbarEmailInput = document.querySelector(
        "#sticky .subscribe input[type='email']"
    );
    navbarEmailInput.focus();
}

function scrollEvents(event, isRight) {
    const arrowWrapper = event.target.parentNode,
        eventsWrapper =
            arrowWrapper.getElementsByClassName("events-wrapper")[0],
        getPixelInt = (str) => +str.replace("px", ""),
        wrapperWidth = getPixelInt(getComputedStyle(eventsWrapper).width),
        eventsInfoArr = [
            ...arrowWrapper.getElementsByClassName("event-info"),
        ].filter((info) => {
            const left = info.offsetLeft,
                right = left + info.offsetWidth;
            return isRight
                ? right > eventsWrapper.scrollLeft + wrapperWidth
                : ~~(left - eventsWrapper.scrollLeft) < 0;
        }),
        eventsInfo = isRight ? eventsInfoArr[0] : eventsInfoArr.pop();
    eventsInfo &&
        eventsWrapper.scrollTo({
            top: 0,
            left: eventsInfo.offsetLeft - 5,
            behavior: "smooth",
        });
}
