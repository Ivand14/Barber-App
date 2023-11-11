const { Reservation } = require("../../db")


const deleteController = async({id}) => {
    const findReserv = await Reservation.findOne({where:{id}})

    if(findReserv){
        await findReserv.destroy()
        return{
            message: 'Reserva eliminada'
        }
    }

}

module.exports = deleteController