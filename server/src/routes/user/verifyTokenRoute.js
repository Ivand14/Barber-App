const {Router} = require('express')
const tokenVerfied = require('../../handler/user/tokenVerified')


const routerTokenVerified = Router()

routerTokenVerified.get('/verify-token/:verifyToken',tokenVerfied)

module.exports = routerTokenVerified