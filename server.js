const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

// Configuración del transportador de nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Ruta para manejar la solicitud POST en /send-email
app.post('/send-email', async (req, res) => {
    console.log('Datos recibidos:', req.body);

    const { nombre, telefono, mail, mensaje } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'nestcodestudio@gmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `Tienes un nuevo mensaje de contacto:\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${mail}\nMensaje: ${mensaje}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
        res.status(200).json({ message: 'Correo enviado con éxito.' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Hubo un problema al enviar el mensaje.' });
    }
});

// Iniciar el servidor en el puerto definido
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
