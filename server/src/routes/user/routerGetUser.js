
const {Router} = require('express')
const getUserByName = require('../../handler/user/getUser')

const routerGetUser = Router()

routerGetUser.get('/searchUser',getUserByName)

module.exports = routerGetUser