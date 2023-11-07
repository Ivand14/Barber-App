const transporter = require('./transporter'); // Importa el transporter que configuraste
const crypto = require('crypto');
const { User } = require('../db');

const sendVerificationEmail = async(email, userId) => {
    

    const token = crypto.randomBytes(32).toString('hex')

    
    const verificationLink = `http://localhost:5173/login/${token}`;
    
    const mailOptions = {
        from: 'ivanmoyano933@gmail.com', // Cambia esto con tu dirección de correo
        to: email,
        subject: 'Verificación de Cuenta',
        text: `Haz clic en el siguiente enlace para verificar tu cuenta: ${verificationLink}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });

    await User.update({verifyToken:token},{where:{id:userId}})
    
};

module.exports = sendVerificationEmail;
