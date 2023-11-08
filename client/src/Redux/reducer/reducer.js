import { SING_UP } from "../../Redux/action/Singup/singupAction"
import { LOGIN } from '../action/Login/loginAction';
import { RECOVER_PASS } from '../action/newPassword/passRecover';
import { ERROR_LOGIN, VERIFY_LOGIN } from '../action/Login/verifyLoginAction';

const initialState = {
    userSignin:[],
    login:[],
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
        case RECOVER_PASS:{
            return{
                ...state,
                login: state.login.map(user => {
                    if(user.id === action.payload.id){
                        return{
                            ...user,
                            password:action.payload.password
                        }
                    }
                    return user
                })
            }
        }
        case VERIFY_LOGIN:{
            return{
                ...state,
                login:action.payload
            }
        }
            default: return state
        }
}

export default rootReducer