const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define('shift',{
        id:{
            type: DataTypes.UUID,
            allowNull:false,
            primaryKey:true
        },
        cost:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        hour:{
            type:DataTypes.ENUM('9','10','11','12','14','15','16','17','18','19','20','21','22'),
            allowNull:false
        },
        day:{
            type: DataTypes.ENUM('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'),
            allowNull:false
        }
    },{timestamps:false})
}