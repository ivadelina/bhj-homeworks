
document.cookie = "wasClosed=true; SameSite=None; Secure";

    if (!document.cookie) {
      return null;
    }
    let cookies = document.cookie.split('; ');
    console.log(cookies);
    let cookie = cookies.find((c) => c.startsWith("wasClosed" + '=')) || '';
    console.log(cookie)
    const value = decodeURIComponent(cookie.substr(key.length + 1));
    return (cookie) ? value : null;
  



let sibscribeBox = document.getElementById("subscribe-modal");
setTimeout(() => sibscribeBox.classList.add("modal_active"), 3000);
document.querySelector(".modal__close").addEventListener("click", () => {
    sibscribeBox.classList.remove("modal_active");
    document.cookie = "wasClosed=true; SameSite=None; Secure";

});


