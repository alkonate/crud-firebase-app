import { Redirect } from "react-router-dom"
import { routes } from "../routes"

const RedirectNamedRoute = ({name}) => {
    const route = routes.find(route => route.name === name)
    
    if(route) {
        return <Redirect to={route.path} />
    }
    throw Error(`Route name ${name} not found please please check the name of your route.`)
}

export default RedirectNamedRoute