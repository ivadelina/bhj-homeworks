const image = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speedo = document.getElementById("clicker__speedo");
let lastTime = 0;
image.onclick = function() {
    let timeNow = (new Date()).getTime();
    speedo.textContent = (1 /((timeNow - lastTime) / 1000)).toFixed(2); ;
    if(image.width !== 100) {
    image.width = 100;
    image.height = 100;
    } else {
        image.width = 200;
        image.height = 200;  
    };
    counter.textContent ++;
    lastTime = timeNow;
};