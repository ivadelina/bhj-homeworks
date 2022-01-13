let nameInput = document.getElementById("task__input");
let namebutton = document.getElementById("tasks__add");
let nameList = document.getElementById("tasks__list");

namebutton.addEventListener("click", addtask);

function addtask (evt) {
    evt.preventDefault();
    let valueInput = nameInput.value;
    nameList.insertAdjacentHTML('afterBegin','<div class="task"> <div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>');
    let textBox = document.querySelector(".task__title");
    textBox.innerText = valueInput;
    let closeBox = document.querySelector(".task__remove");
    closeBox.onclick = function(event) {
        let deletableElement = event.target.closest("div");
        deletableElement.remove();
    };
    nameInput.value = "";
   
};













                

