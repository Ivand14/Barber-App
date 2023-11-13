const { shift } = require("../../db")

const createShift = async({cost,hour,day}) => {

    const createShift = await shift.findOrCreate({where:{cost,hour,day}})

    return createShift

}

module.exports = createShift