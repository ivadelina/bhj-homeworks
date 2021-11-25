let arrowLeft = Array.from(document.querySelectorAll("div.slider__arrow_prev"));
let arrowRight = Array.from(document.querySelectorAll("div.slider__arrow_next"));

let activeId = undefined;
let sliderItems = Array.from(document.querySelectorAll("div.slider__item"));
console.log(sliderItems)
for(let i = 0; i < sliderItems.length; i++) {
    if(sliderItems[i].classList.contains('slider__item_active')) {
        activeId = i
    };
};

arrowRight[0].onclick = function() {
    console.log(activeId)
    sliderItems[activeId].classList.remove('slider__item_active');
    sliderItems[activeId++].classList.add('slider__item_active');
    console.log(activeId)
    if(activeId === 5) {
        console.log(activeId)
        sliderItems[activeId].classList.remove('slider__item_active');
        sliderItems[0].classList.add('slider__item_active');   
        console.log(activeId) 
    };
};

arrowLeft[0].onclick = function() {
    if(activeId === 0) {
        sliderItems[activeId].classList.remove('slider__item_active');
        activeId = 4;
        sliderItems[activeId].classList.add('slider__item_active');
    } else if (activeId > 0) {
        console.log(sliderItems[activeId])
    sliderItems[activeId].classList.remove('slider__item_active');
    sliderItems[activeId--].classList.add('slider__item_active');
    };
    
};

