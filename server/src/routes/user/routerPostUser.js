const {Router} = require('express')
const postUser = require('../../handler/user/postUser')

const routerCreateUser = Router()

routerCreateUser.post('/newUser',postUser)

module.exports = routerCreateUser