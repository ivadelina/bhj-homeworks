let menuTab = Array.from(document.querySelectorAll(".tab"));
let contentTab = Array.from(document.querySelectorAll(".tab__content"));
for(let el of menuTab) {
    el.addEventListener("click", choose);
};

function choose(event) {
    close();
    event.target.classList.add("tab_active");
    let activeId = menuTab.indexOf(event.target);
    contentTab[activeId].classList.add("tab__content_active");
};

function close() {
    let activeMenu = document.querySelector(".tab_active");
    activeMenu.classList.remove("tab_active");
    let activeTab = document.querySelector(".tab__content_active");
    activeTab.classList.remove("tab__content_active");
};
