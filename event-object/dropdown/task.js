let topList = document.querySelector(".dropdown__value");
let openMenu = document.querySelector(".dropdown__list");
let chooseOption = Array.from(document.querySelectorAll(".dropdown__item"));
topList.addEventListener("click", () => openMenu.classList.add("dropdown__list_active"));
for(el of chooseOption) {
    el.onclick = function(event) {
        event.preventDefault();
        topList.innerText = event.target.innerText;
        openMenu.classList.remove("dropdown__list_active");
    };
};



