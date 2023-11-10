const {Router} = require('express')
const createReservation= require('../../handler/reservation/postReservation')

const reservationPostRoute = Router()

reservationPostRoute.post('/newReserv',createReservation)

module.exports = reservationPostRoute