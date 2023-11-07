const {Router} = require('express')
const handlerLogin = require('../../handler/user/handlerLogin')

const routerLogin = Router()

routerLogin.get('/login',handlerLogin)

module.exports = routerLogin