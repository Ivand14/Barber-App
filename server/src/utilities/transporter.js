const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'ivanmoyano933@gmail.com',
        pass:'q u p p n o s g l w u d l b r e'
    }
})

module.exports = transporter