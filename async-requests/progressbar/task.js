const formElement = document.getElementById('form');
const progressElement = document.querySelector('progress');
document.querySelector("#form").addEventListener("submit", function(event) {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.upload.onprogress = (evt) => {
    progress.value = evt.loaded / evt.total;
  };
  xhr.send(new FormData(formElement));
});



