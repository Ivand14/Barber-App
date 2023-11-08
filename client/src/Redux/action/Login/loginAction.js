import axios from "axios"


export const LOGIN = 'LOGIN'

const loginAction = (email,password) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/login?email=${email}&password=${password}`)


            dispatch({
                type: LOGIN,
                payload:response.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export default loginAction