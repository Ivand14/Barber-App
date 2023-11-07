import { SING_UP } from "../../Redux/action/Singup/singupAction"
import { LOGIN } from '../action/Login/loginAction';

const initialState = {
    userSignin:[],
    login:[]
}

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case SING_UP:
            return{
                ...state,
                userSignin:action.payload
            }
        case LOGIN:{
            return{
                ...state,
                login:action.payload
            }
        }
            default: return state
        }
}

export default rootReducer