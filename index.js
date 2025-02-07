const goUpBtn = document.getElementById("arrow-up-btn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 350) {
        goUpBtn.classList.add("show");
    } else {
        goUpBtn.classList.remove("show");
    }
}

goUpBtn.addEventListener("click", e => {
    window.scrollTo({top: 0, behavior: "smooth"})
})