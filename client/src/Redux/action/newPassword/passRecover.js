export const RECOVER_PASS = 'RECOVER_PASS'
import axios from 'axios';

const recoverPass = (userId,password) => {
    return async(dispatch) => {
        try {
            const response = await axios.put(`http://localhost:3001/updateUser/${userId}`,{password})

            dispatch({
                type: RECOVER_PASS,
                payload:{
                    id:response.data.findId.id,
                    password:response.data.findId.password
                }
            })
        } catch (error) {
            
        }
    }
}

export default recoverPass