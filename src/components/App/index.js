import { Suspense } from "react"
import { Online, Offline } from "react-detect-offline";
import ErrorBoundary from '../ErrorBoundary'
import {Error} from '../ErrorBoundary'
import UnauthLayout from "./layouts/UnauthLayout"
import AuthLayout from "./layouts/AuthLayout"
import { hasSessionStorageUser } from '../../helpers'
import Dismissable from '../Dismissable'
import OnlineNotification from './../OnlineNotification'
import OfflineNotification from './../OfflineNOtification'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './../../index.css'
import { withAuth } from "../Authentication";


const App = ({isAuth}) => {

    return (
        <div className="app" data-testid="app">
            <ErrorBoundary fallback={<Error />} >
                <Suspense fallback={<div>loading...</div>}>
                <Offline>
                    <OfflineNotification />
               </Offline>
               <Online>
                    <Dismissable duration="2000">
                        <OnlineNotification />
                    </Dismissable>
               </Online>
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