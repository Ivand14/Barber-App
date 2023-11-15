import React, { useState,useEffect } from 'react';

import { Box,Button, Typography } from '@mui/material';

import "react-toastify/dist/ReactToastify.css";

import MyDate from '../myDates/MyDate'



const Home = () => {
    
    const [userData, setuserData] = useState([])
    const[toggleButton,setToggleButton] = useState('mis citas')



    const handleToggle = (buttonName) => {
        setToggleButton(buttonName)
    }

    useEffect(() => {
        // Evitar que el usuario regrese a la página de inicio de sesión al hacer clic en el botón de retroceso
        const handlePreventBack = (event) => {
          event.preventDefault();
          history.push('/home'); // Redirigir nuevamente a la página de inicio
        };
    
        window.addEventListener('popstate', handlePreventBack);
    
        return () => {
          window.removeEventListener('popstate', handlePreventBack);
        };
    }, [history]);

    
    const handleLogout = () => {
        // Limpiar los datos del usuario en el almacenamiento local
        window.location.pathname = '/login'
    };

    useEffect(()=>{
        const getUserData = () => {
            try {
                const user = localStorage.getItem('userInfo');
                setuserData(user ? JSON.parse(user) : []); // Parse the string to JSON if it exists
            } catch (error) {
                console.error('Error getting user data:', error);
            }
        };

        getUserData();
    },[])


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection:'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'start',
                backgroundColor:'#0F0F0F'
            }}
        >
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <Box sx={{display:'flex',alignItems:'start',justifyContent:'space-between',width:'60vw'}}>
                    <Box>
                        <Typography sx={{fontSize:40,color:'white',p:1,fontFamily:'cursive'}}>Luquiando Barber</Typography>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Box sx={{display:'flex',alignItems:'center',p:1}}>
                            <Typography sx={{fontSize:20,color:'white',p:1,fontFamily:'cursive'}} >Hola {userData.name}</Typography>
                            <Button sx={{mr:0,fontWeight:'bold'}} variant="contained" size="medium" color="error" onClick={handleLogout}>
                                Cerrar sesión
                            </Button>
                        </Box>
                        <Box>
                            <Button variant={toggleButton === 'mis citas' ? "contained" : "text"} onClick={()=> handleToggle('mis citas')}>Mis citas</Button>

                            <Button variant={toggleButton === 'nueva cita' ? "contained" : "text"} onClick={()=> handleToggle('nueva cita')}>Nueva cita</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{mt:5}}>
                    {toggleButton === 'mis citas' && (
                        <Box>
                            <Box sx={{p:2}}>
                                <Typography sx={{color:'white',fontSize:30}}>Mis Citas</Typography>
                                <Typography sx={{color:'white',fontSize:20}}>A continuación podrás administrar tus proximas citas</Typography>
                            </Box>
                            {userData.Reservations && userData.Reservations.length ? (
                                <Box sx={{p:2}}>
                                    {userData.Reservations.map((reservation)=>(
                                        <Box key={reservation.id} sx={{mt:2}}>
                                            <MyDate
                                                id={reservation.id}
                                                cost={reservation.cost}
                                                date={reservation.date}
                                                pay={reservation.pay}
                                                hour={reservation.hour}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            ):
                            <Box sx={{p:1}}>
                                <Typography sx={{color:'white',fontSize:20,p:1}}>No hay citas agendadas</Typography>
                            </Box>
                            }
                        </Box>
                    )}
                </Box>
                <Box>
                    {toggleButton === 'nueva cita' && (
                        <Typography>hola</Typography>
                    )}
                </Box>
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

export default Home;
