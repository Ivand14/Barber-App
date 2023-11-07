const { Op } = require("sequelize")
const { User } = require("../../db")


const userByName = async({name}) =>{

    const findUser = await User.findOne({where:{
        name:{
            [Op.iLike] : `%${name}%`
        }
    }})

    return findUser

}

module.exports = userByName