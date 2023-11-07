const userByName = require("../../controllers/user/userByname")

const getUserByName = async(req,res) => {

    const{name} = req.query

    try {
        if(!name) return res.status(404).json('Nombre requerido')
        const user = await userByName({name})
        if(!user) return res.status(404).json('Usuario no encontrado')
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = getUserByName