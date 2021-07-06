import { routes } from "../Routes/routes"
export function getError (error) {
    
    const errorMessage = "oups! Il y'a une erreur."
    
    if(process.env.NODE_ENV === "development") {
        if(error && error.message) {
            console.log(error.code,error.message)
        }
    
    }else if (process.env.NODE_ENV === "production") {
        if(error && error.message) {
            console.log(errorMessage)
        }
    }

    return error
}

export function composeHoc (...functions) {
    return function (args) {
        return functions.reduce((arg,fn) => fn(arg),args)
    }
}

export function hasSessionStorageUser () {
    for(let key in sessionStorage) {
        if(key.startsWith("firebase:authUser")){
           return key
        }
    }

    return null
}

export function getUserFromSessionStorage () {
    const key = hasSessionStorageUser() 
    return key ? JSON.parse(sessionStorage.getItem(key)) : null
}

export function redirectTo(history,to) {
    if(to && to.name) {
        const route = routes.find(route => route.name === to.name)
        if(route) {
            history.push("test/t?a=z")
        }else {
            throw Error(`Route name ${to.name} not found please check your route name.`)
        }
    }else {
        history.push(to)
    }
}