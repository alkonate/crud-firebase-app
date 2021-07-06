import { useEffect } from "react"
import { Spinner } from "react-bootstrap"

const TimeoutSpinner = ({setLoading,timeout,...props}) => {
    
    useEffect(() => {
        const spinnerTimeout = setTimeout( () => setLoading(false),timeout)
        
        // clean everything before leaving
        return () => {
            console.log("spinner timeout cleaned")
            clearTimeout(spinnerTimeout)
        }
    }, [timeout,setLoading])
    
    return <Spinner {...props}/>
}

export default TimeoutSpinner