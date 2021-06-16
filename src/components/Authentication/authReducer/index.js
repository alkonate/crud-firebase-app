import * as ACTIONS from './../constants'
const AuthReducer = (state, {type,payload}) => {
    switch (type) {
        case ACTIONS.USER_ACTION:
            return {
                ...state,
                user : {...payload}
            }
        case ACTIONS.ISAUTH_ACTION :
            return {
                ...state,
                isAuth : payload
            }
        case ACTIONS.LOADING_ACTION : 
            return {
                ...state,
                loading : payload
            }
        default:
            return state
    }
}

export default AuthReducer