const updateUser = require("../../controllers/user/UpdateUser")
const bcryptjs = require('bcryptjs')

const putUser = async(req,res) =>{

    const {id} = req.params
    const{name,email,password} = req.body

    try {
        if(!id) return res.status(404).json({message:'Id requerido'})

        let passwordHash = await bcryptjs.hash(password,8)

        const updated = await updateUser({id,name,email,password:passwordHash})

        return res.status(200).json(updated)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}

module.exports = putUser