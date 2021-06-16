import { useEffect } from "react"
import { useReducer } from "react"
import { composeHoc } from "../../../helpers"
import { withFirebase } from "../../Firebase"
import { authIsAuthAction, authUserAction } from "../authActions"
import AuthContext from '../AuthContext'
import AuthReducer from '../authReducer'

const InitialState = {
    user : null,
    isAuth : false,
    loading : false,
}

const AuthProvider = ({children,firebase}) => {
    const [authState, dispatch] = useReducer(AuthReducer, InitialState)
    
    //listen for any change in th user state
    useEffect(() => {
       const listen = firebase.auth.onAuthStateChanged( user => {
           dispatch(authUserAction(user))
           dispatch( authIsAuthAction(!!user))
       })

       return () => {
           listen()
       }
    }, [firebase])

    return (
        <AuthContext.Provider value={{dispatch,authState}}>
            {children}
        </AuthContext.Provider>
    )
}

export default composeHoc(withFirebase)(AuthProvider)