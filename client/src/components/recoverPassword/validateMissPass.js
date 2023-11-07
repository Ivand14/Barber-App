const validate = (form) =>{
    const error = {}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))  error.email = 'Email invalido'

    return error
}

export default validate