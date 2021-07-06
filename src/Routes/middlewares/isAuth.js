import { withAuth } from "../../components/Authentication"
import { hasSessionStorageUser } from "../../helpers"

import Redirect from './../components/RedirectNamedRoute'

const authGuard = (next) => {
    console.log("authGuard")
    return withAuth(
          ({isAuth,...props}) => {
              console.log(isAuth)
            if(isAuth || hasSessionStorageUser()) {
                return next()
            }
              return <Redirect name="Signin" />
          }
      )
}

export default authGuard