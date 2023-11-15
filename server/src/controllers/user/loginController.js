const { User, Reservation } = require("../../db")
const bcrypt = require('bcryptjs')

const loginController = async({email,password}) => {

    const findUser = await User.findOne({where:{
            email,
        },
        include:[{
            model: Reservation
        }]
    })

    if(findUser){
        const match = await bcrypt.compare(password.trim(),findUser.dataValues.password.trim())
        if(match){
            return findUser
        }else{
            throw new Error({
                message:'Datos invalidos',
                login:false
            })
        }
    }

}   

module.exports = loginController