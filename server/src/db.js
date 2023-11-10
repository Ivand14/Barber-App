const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()
const {DB_HOST,DB_NAME,DB_PASSWORD,DB_USER} = process.env
const userModel = require('./models/User')
const reservationModel = require('./models/Reservation');
const shiftModel = require('./models/shifts')



const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false, native: false},
);

userModel(sequelize)
reservationModel(sequelize)
shiftModel(sequelize)

const {User,Reservation,shift} = sequelize.models

User.hasMany(Reservation)
Reservation.belongsTo(User)

Reservation.belongsTo(shift)


module.exports = {
    User,
    Reservation,
    shift,
    conn:sequelize
}
