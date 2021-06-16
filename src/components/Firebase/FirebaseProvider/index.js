import { useState } from 'react'
import FirebaseContext from './../FirebaseContext'
import Firebase from './../FirebaseService'

const FirebaseProvider = ({children}) => {
    const [firebase] = useState(Firebase)
    return (
        <FirebaseContext.Provider value={firebase}>
            {
                children
            }
        </FirebaseContext.Provider>
    )   
}



export default FirebaseProvider