import app from './../../Firebase/index'
import 'firebase/database'

class DataBase {
    constructor() {
        if(!DataBase.instance) {
            this.database = app.database()
            this.TIMESTAMP = app.database.ServerValue.TIMESTAMP
            DataBase.instance = this
        }

        return DataBase.instance
    }


    /**
     * Get a reference to the database key
     * @param {string} key Object
     */
    getNodeRef = (key) => this.database.ref(key)


    /**
     * Generate a reference to a newly created location and set data to it.
     * @param {object} key 
     * @returns object
     */
    pushNode = (key,data) => this.getNodeRef(key).push(data)

    /**
     * Set database key value
     * @param {object} ref 
     * @param {object} data 
     * @returns 
     */
    setNode = (ref,data) => ref.set(data)

    /**
     * update multiple database key value at a same time
     * @param {object} ref 
     * @param {object} data 
     * @returns 
     */
    updateNode = (ref,data) => ref.update(data)

    /**
     * remove key from database.
     * @param {object} ref 
     * @returns 
     */
    removeNode = (ref) => ref.remove()
}

const instance = new DataBase()

Object.freeze(instance)

export default instance