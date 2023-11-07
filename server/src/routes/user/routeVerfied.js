const {Router} = require('express')
const verfiedUser = require('../../handler/user/verifiedUser')

const routerVerified = Router()

routerVerified.get('/verified/:id',verfiedUser)

module.exports = routerVerified