import 'react-calendar/dist/Calendar.css';

import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'

import Calendar from 'react-calendar';

const NewDate = () => {

    const[toggleButton,setToggleButton] = useState('servicios')
    const[descriptionService,setDescriptionService] = useState('')
    const[cardToggle,setCardToggle]= useState([])
    const[showAviableTimes,setAviableTimes] = useState(false)
    const[date,setDate] = useState(new Date())
    const[hour,setHour] = useState('')
    const [availableTimes,setAviableTime] = useState([
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00'
    ])

    const handleToggle = (buttonName) => {
        setToggleButton(buttonName)
    }

    

    const serviceList = [
        {description:'Corte Y Barba', cost:2300},
        {description:'Mechas y Reflejos', cost:3500},
        {description:'Globales y Franjas', cost:3000},
        {description:'Corte', cost:2000},
    ]

    const handleDescription = (description) => {
        setDescriptionService(description)
    }

    const handleCardSelection = (description, cost) => {
        const selectedServiceIndex = cardToggle.findIndex((service) => service.description === description);

        if (selectedServiceIndex !== -1) {
            const updatedServices = [...cardToggle];
            updatedServices.splice(selectedServiceIndex, 1);
            setCardToggle(updatedServices);
        } else {
            setCardToggle([...cardToggle, { description, cost }]);
        }
        handleDescription(description); // Si es necesario, maneja la descripción aquí también
    };

    const handleDelete = (description) => {
        const deleteService = cardToggle.filter(services => services.description !== description)
        setCardToggle(deleteService)
    }

    const handlePay = () => {
        let total = 0
        for (let index = 0; index < cardToggle.length; index++) {
            const element = cardToggle[index];
            total += element.cost
        }
        console.log(total)
        return total
    }


    const handleTimes = (dateSelect) => {
        setDate(dateSelect)
        setAviableTimes(true)
        
        const today = new Date()
        
        if(dateSelect < today){
            setAviableTimes(false)
        }
    }

    const disabledDays = [0, 1]; // Domingo, Lunes, Martes y Sábado (0-6 corresponden a los días de la semana)

    const isDayDisabled = ({ date }) => {
        // Devuelve true si el día está en el array de días deshabilitados
        return disabledDays.includes(date.getDay());
    };

    const handleHour = (hour) => {
        setHour(hour)
        const updateHours = availableTimes.filter(time => time !== hour)
        setAviableTime(updateHours)
    }

    console.log(hour)


    return (
        <Box sx={{display:'flex',flexDirection:'column',overFlow:'hidden',width:'62vw'}}>
            <Box sx={{display:'flex',justifyContent:'center',gap:5,p:2}}>
                <Button variant={toggleButton === 'servicios' ? 'contained' : 'text'}  onClick={()=>handleToggle('servicios')} fullWidth>SERVICIOS</Button>
                <Button  variant={toggleButton === 'citaYresumen' ? 'contained' : 'text'}  onClick={()=>handleToggle('citaYresumen')}  fullWidth>CITA Y RESUMEN</Button>
            </Box>
            <Box sx={{p:2,width:'62vw'}}>
                {toggleButton ==='servicios' && (
                    <Box  sx={{p:2,width:'62vw'}}>
                        <Box>
                            <Typography sx={{fontSize:38,fontWeight:'bold',color:'white'}}>Servicios</Typography>
                            <Typography sx={{fontSize:20,color:'white'}}>A continuación elige al menos un servicio</Typography>
                        </Box>
                        <Box sx={{  mt: 1, display: 'flex', flexWrap: 'wrap',width:'50vw', gap: 2, cursor:'pointer' }}>
                        {serviceList.map((service, index) => (
                            <Box key={index} sx={{
                                backgroundColor: cardToggle.some((selected) => selected.description === service.description) ? 'blue' : '#F5F5F5',
                                borderRadius: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                mt: 1,
                                p: 2,
                                width: '40%',
                                alignItems: 'start'
                            }}
                            onClick={() => handleCardSelection(service.description, service.cost)}
                            >

                            <Typography sx={{ fontSize: 25,color: cardToggle.some((selected) => selected.description === service.description)? 'white' : 'black' }}>{service.description}</Typography>
                            <Typography sx={{ fontSize: 35, fontWeight: 'bold', color: cardToggle.some((selected) => selected.description === service.description)? 'white' : 'blue' }}>{service.cost}$</Typography>
                            </Box>
                        ))}
                        </Box>
                    </Box>
                )}
            </Box>
            <Box>
                {
                    toggleButton === 'citaYresumen' && (
                        <>
                            <Box sx={{p:2}}>
                                <Typography sx={{fontSize:24,fontWeight:'bold',color:'white'}}>Detalle de cita y resumen</Typography>
                                <Typography sx={{fontSize:18,color:'white'}}>A continuación verifica la informacion y confirma tu cita</Typography>
                            </Box>
                            <Box sx={{p:2, display: 'flex',flexDirection:'column', flexWrap: 'wrap',width:'62vw', gap: 2, cursor:'pointer' }}>
                                <Typography sx={{fontSize:24,fontWeight:'bold',color:'white'}}>Servicios</Typography>
                                <Box>
                                    {cardToggle && cardToggle.length > 0 ? (
                                        cardToggle.map((data,index) => (
                                            <Box key={index} sx={{border:1,borderColor:'white',p:2,borderRadius:2,mt:1,display:'flex',justifyContent:'space-between'}}>
                                                <Box>
                                                    <Typography sx={{color:'white',fontSize:22,fontWeight:'bold'}}>{data.description}</Typography>
                                                    <Typography sx={{color:'blue',fontSize:22,fontWeight:'bold'}}>{data.cost}$</Typography>
                                                </Box>
                                                <Button sx={{mt:1,fontWeight:'bold',height:35}} variant="contained" size="small" color="error" onClick={()=> handleDelete(data.description)}>
                                                    Eliminar
                                                </Button>
                                            </Box>
                                        ))
                                        ):
                                        <Typography sx={{fontSize:20,fontWeight:'bold',color:'white'}}> 📲 No tienes citas para confirmar</Typography>
                                    }
                                    {cardToggle.length > 0 && (
                                        <Box sx={{display:'flex',gap:1,mt:2,justifyContent:'end'}}>
                                            <Typography  sx={{fontSize:28,color:'white',textAlign:'center'}}>Total a pagar: </Typography>
                                            <Typography  sx={{fontSize:28,fontWeight:'bold',color:'white'}}>{handlePay()}$</Typography>
                                        </Box>
                                    )}
                                    <Box sx={{ marginTop: 5 }}>
                                        <Typography sx={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>Horarios</Typography>
                                        <Box sx={{ marginTop: 5, display: 'flex', gap: 5 }}>
                                            <Calendar onClickDay={handleTimes} value={date} tileDisabled={isDayDisabled} />
                                            {showAviableTimes && (
                                            <Box sx={{ padding: 2, alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                                                Horarios disponibles para {date.toLocaleDateString()}
                                                </Typography>
                                                <Box sx={{gap:1}}>
                                                {availableTimes.map((time) => (
                                                    <Button
                                                    key={time}
                                                    variant="contained"
                                                    sx={{ fontSize: 20, fontWeight: 'bold', color: 'white', backgroundColor: '#3f51b5', marginY: 1,marginX:1 }}
                                                    onClick={()=>handleHour(time)}
                                                    >
                                                    {time}
                                                    </Button>
                                                ))}
                                                </Box>
                                            </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                                
                            </Box>
                        </>
                    )
                }
            </Box>
        </Box>
    )
}

export default NewDate