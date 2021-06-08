import app from  'firebase/app'
// you can create two firebase projects one for dev and one for prod
// and passing two configuration variable like below
// or what you can do instead is create two env variable env.developpement env.production 
console.log(process.env)
const firebaseDevConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}
// const firebaseProdConfig = {
    //apiKey: process.env.REACT_APP_API_KEY,
    //...
// }

class Firebase {
    constructor() {
       return app.initializeApp(firebaseDevConfig)
    }
}

export default Firebase