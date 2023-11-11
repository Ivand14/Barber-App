const deleteController = require("../../controllers/reservation/deleteReservation")

const deleteHandler = async(req,res) => {
    const {id} = req.params
    try {
        if(!id) return res.status(404).json('Id requerido')
        const deleteReserv = await deleteController({id})
        return res.status(200).json(deleteReserv)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = deleteHandler