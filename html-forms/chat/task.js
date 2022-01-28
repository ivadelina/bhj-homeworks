let chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));
let messageField = document.getElementById("chat-widget__input");
let messageBox = document.getElementById("chat-widget__messages");
messageField.addEventListener('keypress', sendMessage);
let hour = new Date().getHours();
hour = (hour < 10) ? '0' + hour : hour;
let minute = new Date().getMinutes();
minute = (minute < 10) ? '0' + minute : minute;
let start;
let rndList = ["Не пишите сюда больше", "Здесь никого нет", "Я не говорю на вашем языке", "Мы ничем не можем вам помочь", "До свидания"];
function sendMessage(e) {
    if (e.key === "Enter" & messageField.value.trim() !== "") {
        messageBox.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${hour + ":" + minute}</div>
        <div class="message__text">${messageField.value}</div>
        </div>
        `;
        messageField.value = "";
        messageBox.innerHTML += `
        <div class="message">
        <div class="message__time">${hour + ":" + minute}</div>
        <div class="message__text">${rndList[Math.floor(Math.random() * rndList.length)]}</div>
        </div>
        `;
        messageBox.scrollIntoView(false);
        start = new Date() * 1000;
    };
};
setInterval(ask, 30000);
function ask() {
    if (chatWidget.classList.contains("chat-widget_active") & ((new Date() * 1000) - start) > 30000) {
        messageBox.innerHTML += `
        <div class="message">
        <div class="message__time">${hour + ":" + minute}</div>
        <div class="message__text">Вы ещё здесь?</div>
        </div>
        `;
        messageBox.scrollIntoView(false);
    };
};







