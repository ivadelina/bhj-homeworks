let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();
let progress = document.getElementById('progress');
xhr.upload.onprogress = function(event) {

  }