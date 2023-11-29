const { shift } = require("../../db")

const createShift = async({description,cost,hour,day}) => {

    const createShift = await shift.findOrCreate({where:{description,cost,hour,day}})

    return createShift

}

module.exports = createShift