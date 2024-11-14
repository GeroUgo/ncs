"use strict";

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const mail = document.getElementById("mail");
const mensaje = document.getElementById("mensaje");
const boton = document.querySelector(".form__button");
const mensajeDevuelto = document.querySelector(".lugarError");

const mostrarError = (campo, mensajeError, mensaje, icono) => {
    mensajeError.textContent = mensaje;
    campo.style.borderColor = "#e58c8c";
    mensajeError.classList.add("errorDos");
    icono.style.fontSize = "1em";
};

const ocultarError = (campo, mensajeError, icono) => {
    mensajeError.textContent = "";
    campo.style.borderColor = "#95cca5";
    mensajeError.classList.remove("errorDos");
    icono.style.fontSize = "0em";
};

// Evento de click en el botón
boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    datosError(error);

    // Solo enviar el formulario si no hay errores
    if (!error[0]) {
        enviarFormulario(); // Enviar los datos
    }
});

const datosError = (error) => {
    if (error[0]) {
        mensajeDevuelto.textContent = "Debes completar correctamente los campos";
        mensajeDevuelto.classList.remove("valido");
        mensajeDevuelto.classList.add("error");
    } else {
        mensajeDevuelto.textContent = "¡Los datos se han enviado correctamente!";
        mensajeDevuelto.classList.remove("error");
        mensajeDevuelto.classList.add("valido");
    }
};

const validarCampos = () => {
    let error = [false, ""];

    const mensajeErrorNombre = document.querySelector(".main__contact-error-nombre");
    const mensajeErrorTelefono = document.querySelector(".main__contact-error-telefono");
    const mensajeErrorEmail = document.querySelector(".main__contact-error-email");
    const mensajeErrorMensaje = document.querySelector(".main__contact-error-mensaje");
    const iconoAlertaErrorNombre = document.querySelector(".icono-alerta-nombre");
    const iconoAlertaErrorTelefono = document.querySelector(".icono-alerta-telefono");
    const iconoAlertaErrorEmail = document.querySelector(".icono-alerta-email");
    const iconoAlertaErrorMensaje = document.querySelector(".icono-alerta-mensaje");

    // Validación del nombre
    if (nombre.value.length < 3 || nombre.value.length > 25) {
        error[0] = true;
        mostrarError(nombre, mensajeErrorNombre, "El nombre no es válido. Debe contener entre 3 y 25 caracteres.", iconoAlertaErrorNombre);
    } else {
        ocultarError(nombre, mensajeErrorNombre, iconoAlertaErrorNombre);
    }

    // Validación del teléfono
    if (telefono.value.length < 8 || telefono.value.length > 11 || isNaN(telefono.value)) {
        error[0] = true;
        mostrarError(telefono, mensajeErrorTelefono, "El teléfono no es válido. Debe contener entre 8 y 11 dígitos y solo números.", iconoAlertaErrorTelefono);
    } else {
        ocultarError(telefono, mensajeErrorTelefono, iconoAlertaErrorTelefono);
    }

    // Validación del correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(mail.value)) {
        error[0] = true;
        mostrarError(mail, mensajeErrorEmail, "El correo electrónico no es válido.", iconoAlertaErrorEmail);
    } else {
        ocultarError(mail, mensajeErrorEmail, iconoAlertaErrorEmail);
    }

    // Validación del mensaje
    if (mensaje.value.length < 15) {
        error[0] = true;
        mostrarError(mensaje, mensajeErrorMensaje, "El mensaje no es válido. Debe contener mínimo 15 caracteres.", iconoAlertaErrorMensaje);
    } else {
        ocultarError(mensaje, mensajeErrorMensaje, iconoAlertaErrorMensaje);
    }

    return error;
};

// FUNCION DE ENVÍO DEL FORMULARIO
const enviarFormulario = () => {
    const datos = {
        nombre: nombre.value,
        telefono: telefono.value,
        mail: mail.value,
        mensaje: mensaje.value
    };

    fetch('http://localhost:3003/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formulario enviado:', data.message);
        // Aquí puedes agregar lógica para mostrar mensajes según la respuesta del servidor
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
};
