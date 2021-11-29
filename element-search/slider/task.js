let arrowLeft = Array.from(document.querySelectorAll("div.slider__arrow_prev"));
let arrowRight = Array.from(document.querySelectorAll("div.slider__arrow_next"));

// Находим активный слайд
let activeId;
let sliderItems = Array.from(document.querySelectorAll("div.slider__item"));
    for(let i = 0; i < sliderItems.length; i++) {
        if(sliderItems[i].classList.contains('slider__item_active')) {
            activeId = i
        };
    };

arrowRight[0].onclick = function() {
    sliderItems[activeId].classList.remove('slider__item_active');
    sliderItems[activeId++].classList.add('slider__item_active');
    if(activeId === 4) { // при id = 4 не показывается при клике последний слайд. А при 5 не может быть свойства у underfined
        sliderItems[activeId].classList.remove('slider__item_active');
        activeId = 0;
        sliderItems[activeId].classList.add('slider__item_active');   
    };
};

arrowLeft[0].onclick = function() {
    sliderItems[activeId].classList.remove('slider__item_active');
    sliderItems[activeId--].classList.add('slider__item_active');
    if(activeId === 0) {
        sliderItems[activeId].classList.remove('slider__item_active');
        activeId = 4;
        sliderItems[activeId].classList.add('slider__item_active');
    };   
};

