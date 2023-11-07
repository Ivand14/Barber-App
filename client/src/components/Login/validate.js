
const validate = (form) =>{
    const error = {}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))  error.email = 'Email invalido'

    if(form.password.length < 8)  error.password = 'La contraseña debe tener mas de 8 caracteres'

    return error
}

export default validate