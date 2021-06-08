import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { Navigation } from "../Navigation"
import * as ROUTES from "../../constants/routes"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { lazy, Suspense } from "react"
import ErrorBoundary from '../ErrorBoundary'
import {Error} from '../ErrorBoundary'
import Firebase from './../Firestore'
const Home = lazy(() => import ('./../Home'))
// const Home = lazy(() => import ('./../Account'))

console.log(new Firebase ())
const App =  () => {

    return (
        <div className="app" data-testid="app">
            <ErrorBoundary fallback={<Error />} >
                <Suspense fallback={<div>loading...</div>}>
                    <Router>
                        <Navigation/>
                        {/* Routes */}
                        <section className="mt-5" >
                            <Switch>
                                <Route path={ROUTES.HOME} component={Home} />
                            </Switch>
                        </section>
                    </Router> 
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
export default App