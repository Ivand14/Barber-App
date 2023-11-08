export const VERIFY_LOGIN = 'VERIFY_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'
import axios from "axios"
import { toast } from 'react-toastify';

const verifyLogin = (email,password) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/login?email=${email}&password=${password}`)
            
            const isVerificated = await axios.get(`http://localhost:3001/verify-token/${response?.data?.verifyToken}`);
            
            dispatch({
                type: VERIFY_LOGIN,
                payload: isVerificated.data.user
            })
            

        } catch (error) {
            console.log(error)
            toast.error('Error al verificar la cuenta');
        }

    } 
}

export default verifyLogin