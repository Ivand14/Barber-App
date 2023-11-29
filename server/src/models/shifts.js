const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define('shift',{
        id:{
            type: DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4
        },
        cost:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        hour:{
            type:DataTypes.ENUM('09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'),
            allowNull:false
        },
        day:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },{timestamps:false})
}