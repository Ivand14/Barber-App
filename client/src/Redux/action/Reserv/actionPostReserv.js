export const NEW_RESERV = 'NEW_RESERV'
import axios from 'axios'

export const createReserv = (reservation) => {
    return async(dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/newReserv',reservation)

            dispatch({
                type:NEW_RESERV,
                payload:response.data
            })

        } catch (error) {
            
        }
    }
}