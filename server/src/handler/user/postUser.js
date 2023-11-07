const createUser = require("../../controllers/user/createUser")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
const keys = require('../../settings/key')


const check = express.Router()

check.use((req,res,next)=>{
    let token = req.headers['x-acces-token'] || req.headers('authorization')

    if(!token) return res.json('Es necesario el token para continuar')

    if(token.StartsWith('Bearer ')){
        token = token.slice(7,token.length)
    }

    if(token){
        jwt.verify(token,keys.key,(error,decoded)=>{
            if(error){
                return res.json({
                    message:'Token Invalido'
                })
            }else{
                req.decoded = decoded
                next()
            }
        })
    }

})


const postUser = async(req,res) =>{

    const {name,email,password} = req.body

    try {

        if(!name || !email || !password) return res.status(404).json('Faltan Datos')
        const passwordHash = await bcryptjs.hash(password,8)
        
        const payload = {
            check : true
        }
        
        const token = jwt.sign(payload,keys.key,{expiresIn:'1d'})
        
        const newUser = await createUser({name,email,password:passwordHash,token})

        if(!newUser) return res.status(404).json('Usuario no encontrado')
        

        return res.status(200).json({
            message:'Autenticacion exitosa',
            User:newUser
        })


    } catch (error) {
        return res.status(500).json({error:error.message})
    }



}

module.exports = postUser