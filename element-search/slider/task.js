let items = Array.from(document.querySelectorAll(".slider__item"));
let arrowLeft = document.querySelector(".slider__arrow_prev");
let arrowRight = document.querySelector(".slider__arrow_next");
let dots = Array.from(document.querySelectorAll(".slider__dot"));

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
 
 /*    // Функция установки активного изображения 
    function beActive(obj,id) {
        console.log(id)
        obj[id].classList.remove("slider__item_active")
        id++ // почему это значение не перезаписывается здесь, но точно по такой же схеме перезаписывается в рабосчем коде?
        console.log(id)
        obj[id].classList.add("slider__item_active")
    };
    arrowRight.onclick = function() {
        activeId === 4 ? (
            items[activeId].classList.remove("slider__item_active"),
            dots[activeId].classList.remove("slider__dot_active"),
            activeId = 0,
            items[activeId].classList.add("slider__item_active"),
            dots[activeId].classList.add("slider__dot_active") 
            ) : ( beActive(items,activeId)
            );
    }; */
 
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
            dots[activeId].classList.add("slider__dot_active"));
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
            dots[activeId].classList.add("slider__dot_active"));
    };  
    for(let el of dots) {
        el.onclick = function() {
            items[activeId].classList.remove("slider__item_active");
            dots[activeId].classList.remove("slider__dot_active");
            activeId = dots.indexOf(el);
            items[activeId].classList.add("slider__item_active");
            dots[activeId].classList.add("slider__dot_active");
        };
    };




