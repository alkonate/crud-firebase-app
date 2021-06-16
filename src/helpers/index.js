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
           return true
        }
    }
}