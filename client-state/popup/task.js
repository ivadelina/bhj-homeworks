function setCookie(key, value) {
  document.cookie = key + '=' + encodeURIComponent(value);
  return true;
};
let check = (key) => {
  let value = "; " + document.cookie;
  let parts = value.split("; "+ key + "=");
  if (parts.length=== 2) { 
    return true
  };
};
if(!check("wasClosed")) {
  let sibscribeBox = document.getElementById("subscribe-modal");
  setTimeout(() => sibscribeBox.classList.add("modal_active"), 3000);
  document.querySelector(".modal__close").addEventListener("click", () => {
  sibscribeBox.classList.remove("modal_active");
    /* document.cookie = "wasClosed=true; SameSite=None; Secure"; */
    setCookie("wasClosed", true)
  });
};


