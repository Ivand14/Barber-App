import { SING_UP } from "../../Redux/action/Singup/singupAction"

const initialState = {
    userSignin:[],
}

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case SING_UP:
            return{
                ...state,
                userSignin:action.payload
            }
            default: return state
        }
}

export default rootReducer