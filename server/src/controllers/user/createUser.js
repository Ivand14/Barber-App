const {User, Reservation} = require('../../db')

const createUser = async({name,email,password,token}) => {

    const findEmail = await User.findOne({where:{email,name}})
    if(findEmail) throw new Error('Email en uso')
    
    const [newUser,create] = await User.findOrCreate({where:{
        name,
        email,
        password,
        token
    },include:{
        model:Reservation
    }})

    return newUser

}

module.exports = createUser