const {Router} = require('express')
const postShift = require('../../handler/shift/postShift')

const routerPostShift = Router()

routerPostShift.post('/newShift',postShift)

module.exports = routerPostShift