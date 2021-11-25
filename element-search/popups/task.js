let popDo = document.getElementById('modal_main');
popDo.classList.add("modal_active");
let popDone = document.getElementById('modal_success');
let changeButton = document.querySelector('a.btn_danger');
let close = document.querySelectorAll('div.modal__close_times');
changeButton.onclick = function() {
    popDo.classList.remove("modal_active");
    popDone.classList.add("modal_active");
};
close.forEach(element => {
    element.onclick = function() {
        popDo.classList.remove("modal_active");
        popDone.classList.remove("modal_active");
    };
});
    

