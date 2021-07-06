import { Home, Signin, Signup, NotFound, Store } from "../components/App/pages"
import ProtectedRoute from "./components/ProtectedRoute"
import { isAuth, isGuest } from "./middlewares"

export const routes = [
    {
        name : "Home",
        path:"/dashboard",
        exact : true,
        component: Home ,
        middlewares : [isAuth]
    },
    {
        name : "Product",
        path:"/products",
        component: Home ,
        middlewares : [isAuth]
    },
    {
        name : "Store",
        path:"/stores",
        component: Store ,
        middlewares : [isAuth]
    },
    {
        name : "Account",
        path:"/account",
        exact : true,
        component: Home ,
        middlewares : [isAuth]
    },
    {
        name : "Signup",
        path:"/signup",
        component: Signup ,
        middlewares : [isGuest]
    },
    {
        name : "Signin",
        path:"/signin",
        component: Signin ,
        middlewares : [isGuest]
    },
    {
        name : "404",
        path:"*",
        component: NotFound ,
        middlewares : [isAuth]
    },
]


export const protectedRoutes = routes.map(({name,path,component,middlewares,...props}) => <ProtectedRoute key={name} path={path} component={component} middlewares={middlewares} {...props} />)