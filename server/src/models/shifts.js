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
            type:DataTypes.ENUM('9','10','11','12','14','15','16','17','18','19','20','21','22'),
            allowNull:false
        },
        day:{
            type: DataTypes.ENUM('Martes','Miercoles','Jueves','Viernes','Sabado'),
            allowNull:false
        },
        description:{
            type: DataTypes.ENUM('Mechas y Reflejos','Globales y Franjas','Corte','Corte y Barba'),
            allowNull:false
        }
    },{timestamps:false})
}