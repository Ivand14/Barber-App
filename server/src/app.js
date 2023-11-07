const express = require('express')
const server = express()
const morgan = require('morgan')
const cors = require('cors')
const Router = require('./routes/index')

server.use(express.json())
server.use(morgan('dev'))
server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));

server.use('/',Router)

module.exports = server