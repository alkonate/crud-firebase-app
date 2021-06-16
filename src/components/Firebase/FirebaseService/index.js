import app from  'firebase/app'
import "firebase/auth"
// you can create two firebase projects one for dev and one for prod
// and passing two configuration variable like below
// or what you can do instead is create two env variable env.developpement env.production 
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
    auth = null
    constructor() {
        // app is a singleton
         app.initializeApp(firebaseDevConfig)
         this.auth = app.auth()
        //  use the local language of the browser when sending verification email
         this.auth.useDeviceLanguage();
        // persistance
        this.auth.setPersistence(app.auth.Auth.Persistence.SESSION)
    }

    /**
     * Register new user.
     * @param {string} email 
     * @param {string} password 
     * @returns 
     */
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    /**
     * Sign in user.
     * @param {string} email 
     * @param {string} password 
     * @returns 
     */
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    
    /**
     * Sign out user.
     * @returns 
     */
    doSignOut = () => this.auth.signOut();
    /**
     * Reset user password.
     * @param {string} email 
     * @returns 
     */
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    /**
     * R
     * @param {string} password 
     * @returns 
     */
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export  default new Firebase ()