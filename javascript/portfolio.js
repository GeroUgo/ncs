"use strict";

// ----------------------- PORTAFOLIO DINAMICO -----------------------------

const projectsPortfolio = [
  {
    title: "PAGINA PREMIUN",
    description: "Descripción del proyecto 1",
    imageUrl: "../images/PAG1.jpg",
    link: "https://ejemplo.com/proyecto1",
    type: "Landing Page"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG2.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Premiun"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG3.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Medium"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG4.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Simple"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Premiun"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Premiun"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Landing Page"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Landing Page"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Software"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Software"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Premiun"
  },
  {
    title: "LANDING PAGE",
    description: "Descripción del proyecto 2",
    imageUrl: "../images/PAG5.jpg",
    link: "https://ejemplo.com/proyecto2",
    type: "Pagina Autogestionable"
  }
];

const portfolioContainer = document.querySelector(".main__portfolio-container");

projectsPortfolio.forEach(project => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("portfolio__item");
  projectElement.setAttribute("data-type", project.type); // Agrega el tipo al atributo data-type
  projectElement.innerHTML = `
    <img src="${project.imageUrl}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Ver Proyecto</a>
  `;
  portfolioContainer.appendChild(projectElement);
});