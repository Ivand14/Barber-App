
const { User } = require("../../db")
const recover = require("../../utilities/recoverPassword")
const bcrypt = require("bcryptjs")

const handleRecover = async(req,res) => {

    const{email} = req.query
    
    try {

        
        if(!email ) return res.status(404).json('email requerido') 

        const findUser =  await User.findOne({where:{email}})
        const emailUser = await findUser.email
        const name = await findUser.name
        const idUser = await findUser.id

        console.log(email,name,idUser)
        await recover({emailUser,name,idUser})

        if(!findUser) return res.status(404).json('Usuario no encontrado')

        return res.status(200).json('Mail para recuperar contraseña enviado')


    } catch (error) {
        return res.status(500).json({error:error.message}) 
    }


}

module.exports = handleRecover