let isInViewport = function(element) {
    let viewportHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    if(elementTop < viewportHeight && elementTop > 0) {
    return true;
    };
};

let windows = Array.from(document.querySelectorAll(".reveal"));

function showWindow() {
    for (let el of windows) {
        if(isInViewport(el) === true) {
            el.classList.add("reveal_active")
        };
    };
};

window.addEventListener("scroll", showWindow);



