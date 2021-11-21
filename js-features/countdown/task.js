let timeLeft = 4200;
countdown(); 
function countdown() {  
  let seconds = timeLeft%60; 
  let minutes = timeLeft/60%60; 
  let hour = timeLeft/60/60%60;
  let timer = document.getElementById("timer") 
  timer.textContent = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
  timeLeft--; 
  if (timeLeft === 0) {
    clearTimeout(timer); 
    alert("Вы победили в конкурсе!");
    document.location.assign("https://www.askbooka.ru/stihi/uilyam-shekspir/sonet-116-meshat-soedinenyu-dvuh-serdec.html");
  } else {
    timer = setTimeout(countdown, 1000);
  };
};
