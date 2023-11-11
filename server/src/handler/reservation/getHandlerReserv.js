const getControllerReserv = require("../../controllers/reservation/getControllerReserv")


const getHandlerReserv = async(req,res) => {
    const {id}  = req.params
    try {
        
        if(id){
            const reservById = await getControllerReserv({id})
            return res.status(200).json(reservById)
        }

        const allReserv = await getControllerReserv()
        return res.status(200).json(allReserv)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }


}

module.exports = getHandlerReserv