let xhr = new XMLHttpRequest();
let question = document.getElementById("poll__title");
let answers = document.getElementById("poll__answers");
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE & xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        question.innerText = data.data.title;
        let accumulator = "";
        for(let i in data.data.answers) {
            accumulator += ` <button class="poll__answer">${data.data.answers[i]}</button> `
        };
        answers.innerHTML = accumulator;   
        document.querySelectorAll(".poll__answer").forEach(element => {
            element.addEventListener("click", (event) => {
                alert("Спасибо, ваш голос засчитан!");
                let send = new XMLHttpRequest();
                send.open('POST','https://netology-slow-rest.herokuapp.com/poll.php');
                send.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                let body = [];
                let vote = "vote=" + data.id;
                body.push(vote);
                let answerArr = Array.from(event.target.closest(".poll__answers_active").querySelectorAll(".poll__answer"))
                let result = answerArr.findIndex((item) => item.innerText === event.target.innerText)
                let answer = "answer=" + result;
                body.push(answer);
                body = body.join("&");
                send.send(body);
                send.addEventListener('readystatechange', () => {
                    if(send.readyState === xhr.DONE & send.status === 200) {
                    let dataStat = JSON.parse(send.responseText).stat;
                    let counter = 0;
                    let accum = "";
                    dataStat.forEach((el) => counter += el.votes);
                    dataStat.forEach((el) => {
                        accum += `<div>${el.answer}: ${((el.votes / counter) * 100).toFixed(2)}%</div>`; 
                    });
                    answers.innerHTML = accum; 
                    }; 
                });     
            });    
        });        
    };
});




