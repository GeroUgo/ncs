"use strict";

// ----------------------- SELECT PERSONALIZADO ---------------------------

const selected = document.querySelector(".select-selected");
const items = document.querySelector(".select-items");

selected.addEventListener("click", () => {
  items.classList.toggle("select-hide");
});

items.addEventListener("click", (event) => {
  selected.textContent = event.target.textContent;
  items.classList.add("select-hide");
});

// ----------------------- FILTRO DE PÁGINAS -----------------------------

const itemsSelect = document.querySelectorAll(".select-item");

itemsSelect.forEach(item => {
  item.addEventListener("click", () => {
    const filterType = item.textContent; // Obtiene el tipo de filtro (por ejemplo, "Landing Page")

    const projectElements = document.querySelectorAll(".portfolio__item"); // Selecciona los elementos del DOM

    projectElements.forEach(project => {
      // Filtra según el data-type del elemento en el DOM
      if (project.getAttribute("data-type") === filterType || filterType === "Ver Todos") {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

