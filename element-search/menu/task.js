let links = Array.from(document.querySelectorAll("a.menu__link"));

for(let el = 0; el < links.length; el++) {
    links[el].onclick = function(event) {
        close();
        if (links[el]?.nextElementSibling?.matches('ul.menu') === true) {
            event.preventDefault();
            links[el]?.nextElementSibling?.classList.toggle("menu_active");
        }; 
    };  
}; 
function close() {
    let active = document.querySelector("ul.menu_active");
    active?.classList?.remove("menu_active");
};





