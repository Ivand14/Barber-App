const {Router} = require('express')
const deleteHandler = require('../../handler/reservation/deleteHandler')

const deleteRoute = Router()

deleteRoute.delete('/deleteReserv/:id',deleteHandler)

module.exports = deleteRoute