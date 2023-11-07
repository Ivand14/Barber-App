const {Router} = require('express')
const putUser = require('../../handler/user/putUser')

const routerPutUser = Router()

routerPutUser.put('/updateUser/:id',putUser)

module.exports = routerPutUser