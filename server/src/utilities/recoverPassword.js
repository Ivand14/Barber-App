const transporter = require('./transporter');

const recover = async ({ emailUser, name, idUser }) => {
    const link = `http://localhost:5173/newPassword/${idUser}`;

    let mailOptions = {
        from: 'ivanmoyano933@gmail.com',
        to: emailUser,
        subject: 'Recuperación de contraseña',
        html: `
            <p>Hola ${name},</p>
            <p>Haz click en el siguiente enlace para cambiar tu contraseña:</p>
            <a href="${link}">Cambiar Contraseña</a>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado', info.response);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
}

module.exports = recover;

