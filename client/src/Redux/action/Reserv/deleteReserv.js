export const DELETE_DATE = 'DELETE_DATE'
import axios from 'axios';

export const deleteDate = (id) => {
    return async(dispatch) => {
        console.log(id.id)
        try {

            const response = await axios.delete(`http://localhost:3001/deleteReserv/${id.id}`)

            console.log(response.data)

            dispatch({
                type:DELETE_DATE,
                payload:response.data.reservDelete
            })

        } catch (error) {
            console.log(error)
        }
        
    }
}