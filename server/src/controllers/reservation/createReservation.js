const { Reservation } = require("../../db")

const createReservation = async({date,hour,pay,cost}) => {

    const createReserv = await Reservation.findOrCreate({where:{
        date,
        hour,
        pay,
        cost
    }})

    return createReserv

}

module.exports = createReservation