import React, { useState } from 'react';
import validate from './validateNewPass'
import { Box, FormControl, TextField, Button, Typography } from '@mui/material';
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import recoverPass from '../../Redux/action/newPassword/passRecover'

const NewPassword = () => {
    const [form, setForm] = useState({
        password: '',
    });

    const [error, setError] = useState({});
    const dispatch = useDispatch()

    const{idUser} = useParams()


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };


    

    const handleSubmit = (event) => {
        event.preventDefault()

        const validateErrors = validate(form)
        setError(validateErrors)

        if(Object.keys(validateErrors).length === 0){
            dispatch(recoverPass(idUser,form.password))
            setForm({
                password:''
            })
            toast.success("Contraseña recuperada");
        }

    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection:'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor:'#0C356A'
            }}
        >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    width: '100vw',
                    maxWidth: '600px', // Ajusta el ancho máximo del formulario
                    marginLeft: { xs: 0, md: '93px' }, // Espacio entre la imagen y el formulario
                    justifyContent:'center',
                }}
            >
                <Typography sx={{fontSize:40,color:'white',fontWeight:900}}>Nueva contraseña</Typography>
                <Typography sx={{fontSize:20,color:'white'}}>Coloca tu nueva contraseña</Typography>

                <form
                onSubmit={handleSubmit}
                style={{
                    width: '100%',
                    padding: '2rem',
                    borderRadius: '2rem ',
                }}
            >
                <FormControl sx={{ width: '100%', gap: 2 }}>

                    <Box>
                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            value={form.password}
                            variant="filled"
                            fullWidth
                            onChange={handleChange}
                            sx={{backgroundColor:'white',borderRadius:3}}
                        />
                            {error.password && <Typography sx={{color:'black',textAlign:'center',mt:1,backgroundColor:'red',borderRadius:1,p:1,fontSize:18}}>{error.password}</Typography>}
                    </Box>

                    <Button variant="contained" type="submit" fullWidth>
                        RECUPERAR CONTRASEÑA
                    </Button>
                </FormControl>
                <Box sx={{alignItems:'start',textAlign:'start',mt:5,display:'flex',justifyContent:'space-between'}}>
                    <Box>
                        <Link to={'/'}>
                            <Typography sx={{color:'white',textDecoration:'underline'}}>REGISTRARSE</Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Link to={'/login'}>
                            <Typography sx={{color:'white',textDecoration:'underline'}}>INICIAR SESIÓN</Typography>
                        </Link>
                    </Box>
                </Box>
            </form>
        </Box>
            <Box>
                <img
                    src="/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg"
                    alt="Imagen Portada"
                    style={{
                        width:'35vw',
                        height: '100vh',
                    }}
                />
            </Box>
        </Box>
    );
};

export default NewPassword;