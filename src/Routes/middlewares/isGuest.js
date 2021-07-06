import { withAuth } from "../../components/Authentication"
import { hasSessionStorageUser } from "../../helpers"
import Redirect from "./../components/RedirectNamedRoute"
const guestGuard = (next) => {
    console.log("guestGuard")
    return withAuth(
          ({isAuth,...props}) => {     
            if(!isAuth) {    
                if(!hasSessionStorageUser()){
                    return next()
                }
            }
              return <Redirect name="Store" />
          }
      )
}


export default guestGuard