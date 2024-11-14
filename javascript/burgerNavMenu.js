"use strict";

const buttonNavMenu = document.querySelector(".burger-nav-menu");
const navMenuList = document.querySelector(".header__nav-list");
let navEstado = false;

// Función para abrir/cerrar menú
const toggleMenu = () => {
    if (!navEstado) {
        navMenuList.style.height = "200px"; // Ajusta el tamaño necesario al abrir
        navEstado = true;
    } else {
        navMenuList.style.height = "0"; // Cierra el menú
        navEstado = false;
    }
};

// Función para verificar el ancho de la ventana y ajustar el menú
const checkWindowSize = () => {
    if (window.innerWidth <= 800) {
        // Menu cerrado por defecto en pantallas pequeñas
        navMenuList.style.height = "0"; 
        navEstado = false;
        buttonNavMenu.addEventListener("click", toggleMenu);
    } else {
        // Menu abierto y visible en pantallas grandes
        navMenuList.style.height = "auto"; 
        navEstado = true;
        buttonNavMenu.removeEventListener("click", toggleMenu);
    }
};

// Llamada inicial y escucha de evento resize
checkWindowSize();
window.addEventListener("resize", checkWindowSize);
