const server = require('./src/app')
const dotenv = require('dotenv')
dotenv.config()
const {DB_PORT} = process.env
const {conn} = require('./src/db')

server.listen(DB_PORT,async()=>{
    conn.sync({force:false})
    console.log('Server listen on port ' + DB_PORT)
})