checkBoxes = Array.from(document.querySelectorAll(".interest__check"));
checkBoxes.forEach(el => {
    el.addEventListener("click", check);
});
categoryInside = Array.from(document.querySelectorAll(".interests_active"));
let category = categoryInside.map(function(el) {
    return el.previousElementSibling.firstElementChild;
  });
function check (event) {
    if(category.includes(event.target)) {
        if(event.target.checked) {
            event.target.closest("li.interest").querySelectorAll(".interest__check")[1].checked = true;
            event.target.closest("li.interest").querySelectorAll(".interest__check")[2].checked = true;          
        } else {
            event.target.closest("li.interest").querySelectorAll(".interest__check")[1].checked = false;
            event.target.closest("li.interest").querySelectorAll(".interest__check")[2].checked = false;
        };                
    };

}

