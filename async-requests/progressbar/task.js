let formData = new FormData(document.getElementById("form"));
let progress = document.getElementById('progress');
document.querySelector("#form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let xhr = new XMLHttpRequest();
  xhr.upload.onloadstart = (event) => progress.value = 0.1;
  xhr.upload.onprogress = (event) => {
    if (event.lengthComputable) {
      console.log(event)
      progress.value = progress.value + 0.2;
    };
  };
  xhr.upload.onload = (event) => progress.value = 1;
  xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(formData);
});



