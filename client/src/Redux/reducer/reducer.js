import { SING_UP } from "../../Redux/action/Singup/singupAction"
import { LOGIN } from '../action/Login/loginAction';
import { RECOVER_PASS } from '../action/newPassword/passRecover';
import { ERROR_LOGIN, VERIFY_LOGIN } from '../action/Login/verifyLoginAction';
import { DELETE_DATE } from '../action/Reserv/deleteReserv';
import {NEW_RESERV} from '../action/Reserv/actionPostReserv'

const initialState = {
    userSignin:[],
    login:{
        userInfo:[],
        verified:null
    },
    reservations:[]
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
                login:{
                    userInfo:action.payload.userInfo,
                    verified:action.payload.verified
                }
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
        case NEW_RESERV:{
            return{
                ...state,
                reservations:action.payload
            }
            
        }
            default: return state
        }
}

export default rootReducer