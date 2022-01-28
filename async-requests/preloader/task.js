let xhr = new XMLHttpRequest();
let loading = document.getElementById("loader");
let moneyBox = document.getElementById("items");
xhr.open('GET','https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.LOADIND) {
        loading.classList.add("loader_active");
    } else loading.classList.remove("loader_active");
    if(xhr.readyState === xhr.DONE & xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        let accumulator;
        let clearData = Object.values(data.response.Valute);
        for(let i in clearData) {
            accumulator += `
            <div class="item">
            <div class="item__code">${clearData[i].CharCode}</div>
            <div class="item__value">${clearData[i].Value}</div>
            <div class="item__currency">руб.</div>
            </div>` 
        };
        moneyBox.innerHTML = accumulator; 
    }
});
