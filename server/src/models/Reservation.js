const {DataTypes} = require('sequelize')

module.exports = sequelize =>{
    sequelize.define('Reservation',{
        id:{
            type: DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue: DataTypes.UUID
        },
        date:{
            type: DataTypes.STRING,
            allowNull:false
        },
        hour:{
            type: DataTypes.STRING,
            allowNull:false
        },
        pay:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        cost:{
            type: DataTypes.STRING,
            allowNull:false
        }
    })
}