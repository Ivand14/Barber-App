const { Reservation } = require("../../db")

const getControllerReserv = async ({id}) => {
    
    if(id){
        const findId = await Reservation.findOne({where:{id}})
        return findId
    }

    return await Reservation.findAll()

}

module.exports = getControllerReserv