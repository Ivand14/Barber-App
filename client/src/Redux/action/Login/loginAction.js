import axios from "axios"
import { toast } from 'react-toastify';


export const LOGIN = 'LOGIN'

const loginAction = (email,password) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/login?email=${email}&password=${password}`)
            console.log(response.data.verified)
            dispatch({
                type: LOGIN,
                payload:{
                    userInfo:response.data,
                    verified:response.data.verified
                }
            })

        } catch (error) {
            console.log(error)
            if(error){
                toast.warning(`El usuario no esta autenticado o no esta verificado`)
            }
        }
    }
}

export default loginAction