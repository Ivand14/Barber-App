
const sendVerificationEmail = require('../../utilities/sendVerification'); // Importa la función de envío de correo
const {User} = require('../../db')

const userVerfied = async (req, res) => {

    const { id } = req.params;

    try {

        if (!id) return res.status(404).json({ message: 'Falta el id' });


        const user = await User.findOne({where:{id}});
        const email = user.email
        const userId = user.id

        if(!user)  return res.status(404).json({ message: 'Usuario no encontrado' });
        
        sendVerificationEmail(email,userId)

        return res.status(200).json({message: 'Correo de verificacion enviado' });

        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

module.exports = userVerfied;
