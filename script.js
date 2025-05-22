const openHamburge = document.querySelector(".open-hamburge");
const menuIcon = openHamburge.querySelector("img"); // img-open
const nav = document.querySelector(".nav-list");

openHamburge.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.body.classList.toggle('no-scroll'); // Adiciona ou remove a classe
    openHamburge.classList.toggle("active");

    
    // Alterna a imagem do botão
    if (menuIcon.src.includes("menu_white_36dp.svg")) {
        menuIcon.src = "img/1200px/close_white_36dp.svg";// img-close
    } else {
        menuIcon.src = "img/1200px/menu_white_36dp.svg";// img-open
    }
});

