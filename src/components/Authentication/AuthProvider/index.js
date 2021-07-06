import { useEffect } from "react"
import { useReducer } from "react"
import { composeHoc } from "../../../helpers"
import { authIsAuthAction, authUserAction } from "../authActions"
import AuthContext from '../AuthContext'
import AuthReducer from '../authReducer'
import WithAuthService from "../AuthService/WithAuthService"

const InitialState = {
    user : null,
    isAuth : false,
    loading : false,
}

const AuthProvider = ({children,auth}) => {
    const [authState, dispatch] = useReducer(AuthReducer, InitialState)
    
    //listen for any change in th user state
    useEffect(() => {
       const onAuthStateChangedListener = auth.auth.onAuthStateChanged( user => {          
           dispatch(authUserAction(user))
           dispatch( authIsAuthAction(!!user))
       })

       return () => {
           // clear the listener
           onAuthStateChangedListener()
       }
    }, [auth])

    return (
        <AuthContext.Provider value={{dispatch,authState}}>
            {children}
        </AuthContext.Provider>
    )
}

export default composeHoc(WithAuthService)(AuthProvider)