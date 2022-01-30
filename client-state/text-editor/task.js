let field = document.getElementById("editor");
field.value = localStorage.getItem("text");
field.addEventListener("keyup", () => localStorage.setItem('text', field.value));
document.getElementById("clear").addEventListener("click", () => {
    field.value = "";
    delete localStorage.text;
});




