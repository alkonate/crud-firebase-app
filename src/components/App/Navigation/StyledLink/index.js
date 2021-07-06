import {Link} from 'react-router-dom'
import { routes } from '../../../../Routes/routes'

const StyledLink = ({children,to,command,...props}) => {
    
    if(to && to.name){
        // route object with name
        const route = routes.find(route => route.name === to.name)
        if(route) {
            if(to.urlParams) {
                const urlParams = Object.keys(to.urlParams).map( param => `${param}=${to.urlParams[param]}`).join("&")
                return <Link to={`${route.path}?${urlParams}`} {...props} className="nav-link">{children}</Link>
            }
            return <Link to={route.path} {...props} className="nav-link">{children}</Link>
        }else{
            throw Error (`Invalid route name ${to} please check the route name.`)
        }
    } else if(command){
        // command
        return <Link to="#" {...props} onClick={command} className="nav-link">{children}</Link>
    } else if (to) {
        // route path string
        return <Link to={to} {...props} onClick={command} className="nav-link">{children}</Link>
    } else {
        throw Error (`Invalid props command "${command}" or route path "${to}" please check your component props.`)
    }
}

export default StyledLink