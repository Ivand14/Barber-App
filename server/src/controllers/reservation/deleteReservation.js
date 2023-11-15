const { Reservation } = require("../../db")


const deleteController = async({id}) => {
    const findReserv = await Reservation.findOne({where:{id}})

    if(findReserv){
        const reservDelete = await findReserv.destroy()
        return{
            message: 'Reserva eliminada',
            reservDelete
        }
    }

}

module.exports = deleteController