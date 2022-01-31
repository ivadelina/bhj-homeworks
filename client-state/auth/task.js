let button = document.getElementById("signin__btn");
let greeting = document.getElementById("welcome");
let userId = document.getElementById("user_id");
if(localStorage.getItem("id")) {
    userId.innerText = localStorage.getItem("id");
    greeting.classList.add("welcome_active");
};
button.addEventListener("click", (event) => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/auth.php");
    let formData = new FormData(document.getElementById("signin__form"));
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE & xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);  
            if (data.success === true) {
                localStorage.setItem("id", data.user_id);
                userId.innerText = data.user_id;
                greeting.classList.add("welcome_active");
                document.getElementById("signin__form").reset();
            } else alert("Неверный логин/пароль");
        };
    });
});
