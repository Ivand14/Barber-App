const {Router} = require('express')
const mercadoPago = require('../utilities/mercadoPago')

const mercadoPagoRouter = Router()

mercadoPagoRouter.post("/create_preference",mercadoPago)

module.exports = mercadoPagoRouter