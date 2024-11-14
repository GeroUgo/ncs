"use strict";

// TYPEWRITING

const targetElement = document.querySelector('.main__inicio-title');
let hasAnimated = false; // Bandera para saber si ya se ejecutó la animación


// Define una función que se ejecuta cuando el elemento entra o sale del viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      // El elemento está completamente visible y la animación no se ha ejecutado aún
      hasAnimated = true; // Marca que la animación ya se ejecutó
      console.log('El elemento está completamente visible');
      
      const statusHomeContact = document.querySelector(".main__inicio-title");
      const palabrasContact = [" Bienvenido a NestCodeStudio", " Gracias por entrar!"];
      let palabraIndexContact = 0; // Índice de la palabra actual
      let letraIndexContact = 0;   // Índice de la letra actual
      let borrandoContact = false; // Bandera para saber si está escribiendo o borrando

      function escribirPalabraContact() {
        const palabraActualContact = palabrasContact[palabraIndexContact];
        
        // Si está borrando, reduce el número de letras
        if (borrandoContact) {
          statusHomeContact.innerHTML = palabraActualContact.substring(0, letraIndexContact);
          letraIndexContact--;

          // Si se ha borrado toda la palabra, cambia el estado a escribir la siguiente
          if (letraIndexContact < 0) {
            borrandoContact = false;
            palabraIndexContact = (palabraIndexContact + 1) % palabrasContact.length; // Cambia a la siguiente palabra
          }
        } else {
          // Si está escribiendo, aumenta el número de letras
          statusHomeContact.innerHTML = palabraActualContact.substring(0, letraIndexContact + 1);
          letraIndexContact++;

          // Si se ha escrito toda la palabra, espera un poco y empieza a borrar
          if (letraIndexContact === palabraActualContact.length) {
            setTimeout(() => { borrandoContact = true; }, 1000); // Pausa antes de comenzar a borrar
          }
        }

        // Controla la velocidad del efecto (200ms para escribir y borrar)
        setTimeout(escribirPalabraContact, borrandoContact ? 80 : 80);
      }

      // Inicia el ciclo de escritura y borrado
      escribirPalabraContact();
    }
  });
}, { threshold: 1.0 }); // threshold: 1.0 significa que el elemento debe estar completamente visible

// Comienza a observar el elemento
observer.observe(targetElement);