import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteDate } from '../../Redux/action/Reserv/deleteReserv';

const MyDate = ({cost,pay,hour,date,id}) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteDate(id))
    }



    return (
        <Box sx={{backgroundColor:'#F5F5F5',borderRadius:2,p:2,display:'flex',flexDirection:'column',gap:2}}>
            <Box sx={{display:'flex',gap:1}}>
                <Typography><span style={{fontWeight:'bold'}}>Fecha:</span> {date}</Typography>
                <Typography><span style={{fontWeight:'bold'}}>Hora:</span> {hour}Horas</Typography>
            </Box>
            <Box>
                <Typography sx={{fontWeight:'bold'}}>Servicios solicitados en la cita</Typography>
                <Typography sx={{fontWeight:'bold'}}>Costo:<span style={{fontWeight:'bold',color:'blue'}}> {cost}$</span></Typography>
                <Button sx={{mt:2,fontWeight:'bold'}} size="small" variant="contained" color="error" onClick={() => handleDelete({id})}>
                    Cancelar cita
                </Button>
            </Box>
        </Box>
    )
}

export default MyDate