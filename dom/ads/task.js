let examples = Array.from(document.querySelectorAll(".rotator__case"));
setInterval(function() {   
    let index = getRandomInRange(0,5);
    let active = document.querySelector(".rotator__case_active");
    active.classList.remove("rotator__case_active");
    examples[index].classList.add("rotator__case_active");
 }, 1000);

 function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
for (let el of examples) {
    if(el.innerText === "Лучший программист на земле") {
        el.setAttribute("data-color","green");
        el.style.color = "green";
    } else if (el.innerText === "Бог JS" || el.innerText === "учусь в Нетологии") {
        el.setAttribute("data-color","red");
        el.style.color = "red";
    } else if (el.innerText === "покорю этот мир") {
        el.setAttribute("data-color","#000");
        el.style.color = "#000";
    } else if (el.innerText === "счастливый как никто") {
        el.setAttribute("data-color","blue");
        el.style.color = "blue";
    } else if (el.innerText === "радуюсь жизни") {
        el.setAttribute("data-color","gray");
        el.style.color = "gray";
    };
};
  