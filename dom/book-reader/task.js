let controlFontEl = Array.from(document.querySelectorAll(".book__control_font-size"));
for(let el of controlFontEl) {
    el.addEventListener("click", activeFont)
};
function activeFont(event) {
    event.preventDefault()
    let previousActive = document.querySelector(".font-size_active");
    previousActive.classList.remove("font-size_active");
    event.target.classList.add("font-size_active");
    if(event.target.getAttribute("data-size") === "small") {
        document.querySelector(".book").classList.add("book_fs-small")
    } else if (event.target.getAttribute("data-size") === "big") {
        document.querySelector(".book").classList.add("book_fs-big")
    } else {
        document.querySelector(".book").classList.remove("book_fs-big");
        document.querySelector(".book").classList.remove("book_fs-small");

    }
};



