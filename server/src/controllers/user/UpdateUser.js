const { User } = require("../../db")

const updateUser = async({id,name,email,password}) =>{

    const findId = await User.findOne({where:{id}})

    if(findId){
        
        await findId.update({
            name,email,password
        })

        return{
            message: 'Usuario actualizado',
            findId
        }
    }

}

module.exports = updateUser