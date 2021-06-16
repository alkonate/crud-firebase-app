import {BrowserRouter} from 'react-router-dom'
import { memo, Suspense } from "react"
import ErrorBoundary from '../ErrorBoundary'
import {Error} from '../ErrorBoundary'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import UnauthLayout from "./layouts/UnauthLayout"
import AuthLayout from "./layouts/AuthLayout"
import { withAuth } from '../Authentication'
import { hasSessionStorageUser } from '../../helpers'

const App = ({isAuth}) => {
console.log(isAuth)
    return (
        <div className="app" data-testid="app">
            <ErrorBoundary fallback={<Error />} >
                <Suspense fallback={<div>loading...</div>}>
                {
                
                isAuth || hasSessionStorageUser() ?
                            <AuthLayout />
                          :
                            < UnauthLayout />
                }
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
export default withAuth(App)