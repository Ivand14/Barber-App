const createReservation = require('../../controllers/reservation/createReservation')


const postReservation = async(req,res) => {

    const{date,hour,cost,pay} = req.body

    try {
        
        if(!date || !hour || !cost || !pay) return res.status(404).json('Faltan datos')
        const newReserv = await createReservation({date,hour,cost,pay})

        if(!newReserv) return res.status(404).json('Error al crear la reserva')

        return res.status(200).json(newReserv)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}

module.exports = postReservation