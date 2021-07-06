import app from "../../../Firebase";
import "firebase/auth"
import { getError } from "../../../../helpers";

class Auth {

    constructor() {
        if(!Auth.instance) {
            this.auth = app.auth()
            //  use the local language of the browser when sending verification email
            this.auth.useDeviceLanguage();
            // persistance
            this.auth.setPersistence(app.auth.Auth.Persistence.SESSION)

            Auth.instance = this
        }

        return Auth.instance
    }
    /**
     * Get current user id.
     * @returns string
     */
    doGetCurrentUserUid = () => this.auth.currentUser.uid


    /**
     * Update the user profil display name and image.
     * @param {object} profil 
     * @returns 
     */
    doUpdateUserProfil = (profil) => this.auth.currentUser.updateProfile(profil)

    /**
     * Check wherever a username exist in the DB.
     */
     usernameDoesNotExist = async (db,username) => {

        try {
            const usernameSnap = await db.getNodeRef("usernames").orderByValue().equalTo(username).get()
            
            if(usernameSnap.exists()) {
                const UsernameError = Error()
                UsernameError.code =  "auth/invalid-display-name"
                throw UsernameError
            }

            return;
           
        } catch (error) {
            getError(error)
            if(error.code === "auth/invalid-display-name") {
                throw error
            }
            
            const NetworkError = Error()
            NetworkError.code = "auth/network-request-failed"
            throw NetworkError
        }
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

const instance = new Auth()

Object.freeze(instance)

export default instance