const { Op } = require("sequelize")
const { User, Reservation } = require("../../db")


const userByName = async({name}) =>{

    const findUser = await User.findOne({where:{
            name:{
                [Op.iLike] : `%${name}%`
            },
        },
        include:[
            {
            model:Reservation
            }
        ]
    })

    return findUser

}

module.exports = userByName