const createShift = require("../../controllers/shift/createShift")

const postShift = async(req,res) =>{
    const {description,cost,hour,day} = req.body
    try {
        
        if(!description || !cost || !hour || !day ) return res.status(404).json('Faltan datos')
        const postShift = await createShift({description,cost,hour,day})

        if(!postShift) return res.status(404).json('Error al crear el turno')

        return res.status(200).json(postShift)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = postShift