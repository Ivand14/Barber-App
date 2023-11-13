const { Reservation, User } = require("../../db")


const getControllerReserv = async (id) => {
    
    if(id){
        const findId = await Reservation.findOne({where:{id},include:[{model:User}]})
        return findId
    }else if(!id){
        const allReserv = await Reservation.findAll({include:[{model:User}]})
        return allReserv
    }


}

module.exports = getControllerReserv