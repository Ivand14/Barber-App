export const SING_UP = 'SING_UP';
import axios from 'axios';

const singup = (user) =>{
    return async(dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/newUser', user);
            await axios.get(`http://localhost:3001/verified/${response.data.User.id}`);
            const userInfo = await axios.get(`http://localhost:3001/searchUser?name=${response?.data?.User?.name}`);
            const isVerificated = await axios.get(`http://localhost:3001/verify-token/${userInfo?.data?.verifyToken}`);
            
            dispatch({
                type: SING_UP,
                payload: isVerificated.data.user
            });

        } catch (error) {
            console.log(error.message);
        }
    }
}

export default singup;
