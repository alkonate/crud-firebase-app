import {  BrowserRouter as Router , Switch } from "react-router-dom"
import Navigation from './../../Navigation'
import Footer from './../../Footer'
import { protectedRoutes } from "../../../../Routes/routes"

const AuthLayout = (props) => { 
return  <main>
            <Router>
                
                <Navigation />      
                  
                    <Switch>
                        {
                            protectedRoutes
                        }
                     </Switch>
                   
                   
            </Router>
            <Footer />
    </main>
        
        
}

 export default AuthLayout