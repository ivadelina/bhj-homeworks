let items = Array.from(document.querySelectorAll(".slider__item"));
let arrowLeft = document.querySelector(".slider__arrow_prev");
let arrowRight = document.querySelector(".slider__arrow_next");
let dots = Array.from(document.querySelectorAll(".slider__dot"));
let lastElId = items.length - 1
function beActive(currentActiveId) {
    let activeId = items.findIndex(
        function active() {
            for (el of items) {
                for (let el of items) {
                    if(el.matches(".slider__item_active")) {
                        return true
                    };
                    return false    
                };
            };
        });
    console.log(activeId) 
    console.log(currentActiveId)   
    items[activeId].classList.remove("slider__item_active");
    dots[activeId].classList.remove("slider__dot_active");
    if(currentActiveId < 0) {
        items[lastElId].classList.add("slider__item_active");
        dots[lastElId].classList.add("slider__dot_active");
    } else if(currentActiveId > lastElId) {
        items[0].classList.add("slider__item_active");
        dots[0].classList.add("slider__dot_active");
    } else {
        items[currentActiveId].classList.add("slider__item_active");
        dots[currentActiveId].classList.add("slider__dot_active");
    };
};
arrowRight.onclick = function() {
    let activeId = items.findIndex(
        function active() {
            for (el of items) {
                for (let el of items) {
                    if(el.matches(".slider__item_active")) {
                        return true
                    };
                    return false    
                };
            };
        });
    console.log(activeId)  
    let newActive = activeId + 1; 
    console.log(newActive) 
    beActive(newActive);
};
arrowLeft.onclick = function() {
    let activeId = items.findIndex(
        function active() {
            for (el of items) {
                for (let el of items) {
                    if(el.matches(".slider__item_active")) {
                        return true
                    };
                    return false    
                };
            };
        });
    console.log(activeId)    
    beActive(activeId - 1);
};  
dots.forEach(function(dot, id) {
    dot.addEventListener("click", function() {
        beActive(id);
    });
});




