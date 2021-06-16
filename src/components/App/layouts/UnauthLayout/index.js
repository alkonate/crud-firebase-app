import {  BrowserRouter as Router, Switch } from "react-router-dom"
import styles from './unAuthLayout.module.css'
import UnauthNav from './../../Navigation/UnauthNav'
import Footer from './../../Footer'
import { protectedRoutes } from "../../../../Routes/routes"

const UnauthLayout = (props) => { 

return  <main className={styles.layout}>
            <Router>
                <UnauthNav />
                    <Switch>
                        {
                            protectedRoutes
                        }
                    </Switch>
            </Router>
            <Footer />
        </main>
}

 export default UnauthLayout