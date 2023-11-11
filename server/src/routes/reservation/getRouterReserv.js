const {Router} = require('express')
const getHandlerReserv = require('../../handler/reservation/getHandlerReserv')

const routerGetReserv = Router()

routerGetReserv.get('/reserv/:id',getHandlerReserv)

module.exports = routerGetReserv