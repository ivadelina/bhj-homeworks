let xhr = new XMLHttpRequest();
xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
let progress = document.getElementById('progress');
document.querySelector("#form").addEventListener("submit", function(e){
  e.preventDefault(); 
  let formData = new FormData(document.getElementById("form"))
  xhr.send(formData); // Тут выдает ошибку, что The object's state must be OPENED.
  xhr.upload.onprogress = function(event) {
    // здесь, видимо, должно быть если event.progress, то progress.value = progress.value + 0,2;
  // В примерах везде консоль, а если мне нужно написать условие, то писать if(event.progress){}?
  };
});

