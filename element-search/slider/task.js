let items = Array.from(document.querySelectorAll(".slider__item"));
let arrowLeft = document.querySelector(".slider__arrow_prev");
let arrowRight = document.querySelector(".slider__arrow_next");
let dots = Array.from(document.querySelectorAll(".slider__dot"));

let activeId = items.findIndex(
    function active() {
        for (el of items) {
            if(el.matches(".slider__item_active")) {
                return true
            };
        return false    
        };
    });
    arrowRight.onclick = function() {
        activeId === 4 ? (
            items[activeId].classList.remove("slider__item_active"),
            dots[activeId].classList.remove("slider__dot_active"),
            activeId = 0,
            items[activeId].classList.add("slider__item_active"), 
            dots[activeId].classList.add("slider__dot_active")
            ) : (
            items[activeId].classList.remove("slider__item_active"),
            dots[activeId].classList.remove("slider__dot_active"),
            activeId++,
            items[activeId].classList.add("slider__item_active"),
            dots[activeId].classList.add("slider__dot_active")
        );
    };
    arrowLeft.onclick = function() {
        activeId === 0 ? (
            items[activeId].classList.remove("slider__item_active"),
            dots[activeId].classList.remove("slider__dot_active"),
            activeId = 4,
            items[activeId].classList.add("slider__item_active"), 
            dots[activeId].classList.add("slider__dot_active")
            ) : (
            items[activeId].classList.remove("slider__item_active"),
            dots[activeId].classList.remove("slider__dot_active"),
            activeId--,
            items[activeId].classList.add("slider__item_active"),
            dots[activeId].classList.add("slider__dot_active")
        );
    };
    for(el of dots) {
        el.onclick = function() {
            items[activeId].classList.remove("slider__item_active");
            dots[activeId].classList.remove("slider__dot_active");
            activeId = dots.indexOf(el);
            console.log(dots.indexOf(el)) // Почему всегда четыре???
            items[activeId].classList.add("slider__item_active");
            dots[activeId].classList.add("slider__dot_active");
        };
    };





