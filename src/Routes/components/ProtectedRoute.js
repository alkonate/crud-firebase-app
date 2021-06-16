import { useMemo } from 'react'
import {Route} from 'react-router-dom'
import middlewarePipeline from '../middlewarePipeline'

const ProtectedRoute = ({component,middlewares,...props}) => {
    const Page = useMemo(() => middlewarePipeline(component,middlewares,0), [component,middlewares])
    return <Route {...props} 
                render={
                    (props) => {
                    return <Page {...props} />
                    }
                }
            />
}
export default ProtectedRoute