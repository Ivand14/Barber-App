const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()
const {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER} = process.env
const userModel = require('./models/User')
const reservationModel = require('./models/Reservation');



const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false, native: false},
);

userModel(sequelize)
reservationModel(sequelize)

const {User,Reservation} = sequelize.models

User.hasMany(Reservation)
Reservation.belongsTo(User)



module.exports = {
    User,
    Reservation,
    conn:sequelize
}
