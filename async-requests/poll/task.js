let xhr = new XMLHttpRequest();
let question = document.getElementById("poll__title");
let answers = document.getElementById("poll__answers");
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE & xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        question.innerText = data.data.title;
        let accumulator;
        for(let i in data.data.answers) {
            accumulator += ` <button class="poll__answer">${data.data.answers[i]}</button> `
        };
        answers.innerHTML = accumulator;   
        document.querySelectorAll(".poll__answer").forEach(element => {
            element.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
                let send = new XMLHttpRequest();
                send.open('POST','https://netology-slow-rest.herokuapp.com/poll.php');
                send.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                let body = [];
                body.push("vote: id_опроса");
                body.push("answer: индекс_ответа_в_массиве_ответов");
                send.send(body);
                console.log(send.readyState) //1
                if(send.readyState === xhr.DONE & send.status === 200) {
                    console.log(JSON.parse(send.responseText)); //
                };  
            });    
        });        
    };
});




