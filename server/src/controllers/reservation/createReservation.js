const { Reservation } = require("../../db")

const createReservation = async({date,hour,cost,UserId,shiftId}) => {

    const createReserv = await Reservation.findOrCreate({where:{
        date,
        hour,
        cost,
        UserId,
        shiftId
    }})

    return createReserv

}

module.exports = createReservation