const {DataTypes, UUIDV4} = require('sequelize')

module.exports = sequelize =>{
    sequelize.define('User',{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            defaultValue: UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        verified:{
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull:false
        },
        token:{
            type: DataTypes.STRING,
            allowNull:false
        },
        admin:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        verifyToken:{
            type: DataTypes.STRING,
        }
    },{timestamps:false})
}