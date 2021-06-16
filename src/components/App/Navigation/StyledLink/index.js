import {Link} from 'react-router-dom'
import { routes } from '../../../../Routes/routes'
const StyledLink = ({children,to,...props}) => {
    
    if(to && to.name){
        const route = routes.find(route => route.name === to.name)
        if(route) {
            return <Link to={route.path} {...props} className="nav-link">{children}</Link>
        }else{
            throw Error (`Invalid route name ${to} please check the route name.`)
        }
    }

    return <Link to={to} {...props} className="nav-link">{children}</Link>
}

export default StyledLink