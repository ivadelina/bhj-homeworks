let links = Array.from(document.querySelectorAll("a.menu__link"));
for(let el = 0; el < links.length; el++) {
    links[el].onclick = function() {
        console.log(links[el])
        if (links[el]?.nextElementSibling?.matches('ul.menu') === true) {
            if(links[el]?.nextElementSibling?.matches('menu_active') === false) {
                links[el].nextElementSibling.classList.add("menu_active");
            } else {
                links[el].nextElementSibling.classList.remove("menu_active");
            };
        }; 
    };   
}; 





