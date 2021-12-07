const image = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speedo = document.getElementById("clicker__speedo");
let lastTime = 0;
image.onclick = function() {
    let timeNow = (new Date()).getTime();
    speedo.textContent = (1 /((timeNow - lastTime) / 1000)).toFixed(2); ;
    image.width = +counter.textContent % 2 ? 250 : 200;
    counter.textContent ++;
    lastTime = timeNow;
};