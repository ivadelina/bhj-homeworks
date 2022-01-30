let button = document.getElementById("signin__btn");
let greeting = document.getElementById("welcome");
let userId = document.getElementById("user_id");
if(!localStorage.getItem("id")) {
    userId.innerText = answerId;
    greeting.classList.add("welcome_active");
};
button.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "https://netology-slow-rest.herokuapp.com/auth.php");
    let login = "login=" + signin__form.login.value;
    let password = "password=" + signin__form.password.value;
    let dataSend = [];
    dataSend.push(login);  
    dataSend.push(password);
    dataSend = dataSend.join('&');
    xhr.send(dataSend);
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE & xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);  
            if (data.success === true) {
                localStorage.setItem("id", data.id);
                answerId = data.id;
                userId.innerText = answerId;
                greeting.classList.add("welcome_active");
            } else alert("Неверный логин/пароль");
        };
    });
});
//Unchecked runtime.lastError: The message port closed before a response was received
