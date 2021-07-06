import {  BrowserRouter as Router , Switch } from "react-router-dom"
import Navigation from './../../Navigation'
import Footer from './../../Footer'
import { protectedRoutes } from "../../../../Routes/routes"
import SideBar from "../../../SideBar"
const AuthLayout = (props) => { 
return  <main>
            <Router>
                
                <Navigation />
                <div className="container-fluid mt-2">
                   <div className="row">
                       <div className="col">
                            <SideBar />
                            <div className="page">
                                <Switch>
                                    {protectedRoutes} 
                                </Switch> 
                            </div>   
                       </div>     
                   </div>
                </div>
                   
            </Router>
            <Footer />
    </main>
        
        
}

 export default AuthLayout