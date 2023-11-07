const loginController = require("../../controllers/user/loginController")

const handlerLogin = async(req,res) => {

    const {email,password} = req.query

    try {

        if(!email || !password) return res.status(404).json('Falta el email o password')

        const login = await loginController({email,password})

        if(!login) return res.status(404).json('Usuario no encontrado')

        return res.status(200).json(login)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerLogin