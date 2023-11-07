const {Router} = require('express')
const handleRecover = require('../../handler/user/handleRecoverPass')

const routerRecoverPass = Router()

routerRecoverPass.get('/recoverPassword',handleRecover)

module.exports = routerRecoverPass