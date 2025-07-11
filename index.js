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

function changeLanguage(select) {
    const selectedFile = select.value;
    console.log("Idioma seleccionado:", selectedFile);

    if (selectedFile == "en") {
        window.location.href = "./home_en.html";
    } else if (selectedFile == "es") {
        window.location.href = "./home.html";
    }
  }


function toggleLanguage(language) {
    if (language == "en") {
        window.location.href = "./home_en.html";
    } else if (language == "es") {
        window.location.href = "./home.html";
    }
  }