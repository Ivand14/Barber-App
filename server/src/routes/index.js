const {Router} = require('express')
const routerCreateUser = require('./user/routerPostUser')
const routerPutUser = require('./user/routerPutUser')
const routerVerified = require('./user/routeVerfied')
const routerTokenVerified = require('./user/verifyTokenRoute')
const routerGetUser = require('./user/routerGetUser')
const routerLogin = require('./user/routerLogin')
const routerRecoverPass = require('./user/routerRecover')
const postReservation = require('./reservation/postRouteReservation')
const deleteRoute = require('./reservation/deleteRouteReservation')

const router = Router()

router.use('/',routerCreateUser)
router.use('/',routerVerified)
router.use('/',routerPutUser)
router.use('/',routerTokenVerified)
router.use('/',routerGetUser)
router.use('/',routerLogin)
router.use('/',routerRecoverPass)
router.use('/',postReservation)
router.use('/',deleteRoute)

module.exports = router