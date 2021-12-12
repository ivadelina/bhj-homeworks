let links = Array.from(document.querySelectorAll("a.menu__link"));

for(let el of links) {
    el.onclick = function(event) {
        if(event.target.nextElementSibling?.matches(".menu_active")) {
            let active = event.target.nextElementSibling;
            active.classList.remove("menu_active");
            event.preventDefault();
        } else {
            close();
            if (el?.nextElementSibling?.matches('ul.menu') === true) {
                event.preventDefault();
                el?.nextElementSibling?.classList.add("menu_active");   
            };
        };     
    };  
}; 
function close() {
    let active = document.querySelector("ul.menu_active");
    active?.classList?.remove("menu_active");
};





