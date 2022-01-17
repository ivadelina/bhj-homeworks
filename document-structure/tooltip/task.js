let questions = Array.from(document.querySelectorAll(".has-tooltip"));
let leftPosition, topPosition;
questions.forEach(function(el) {
    el.addEventListener('click', showHint)
});
  function showHint(evt) {
    evt.preventDefault();
    let position = evt.target.getBoundingClientRect();
    let widthPosition = position.x + 20 + "px";
    let heightPosition = position.y + 20 + "px";
    if(!evt.target.nextElementSibling?.classList.contains("tooltip")) {
        evt.target.insertAdjacentHTML("afterEnd",`<div class='tooltip' style='left:${widthPosition}; top:${heightPosition}'>${evt.target.title}</div>`);    
        if(document.querySelector(".tooltip_active")) {
            document.querySelector(".tooltip_active").classList.remove("tooltip_active");
            evt.target.nextElementSibling?.classList.toggle("tooltip_active"); 
        } else {
            document.querySelector(".tooltip").classList.toggle("tooltip_active");
        }     
    } else {
        if(document.querySelector(".tooltip_active")) {
            document.querySelector(".tooltip_active").classList.remove("tooltip_active");
            evt.target.nextElementSibling?.classList.toggle("tooltip_active");
        } else {
            document.querySelector(".tooltip").classList.toggle("tooltip_active");
        }; 
    };
};  


  