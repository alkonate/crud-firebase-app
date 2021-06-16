import {USER_ACTION} from '../constants'
export default function userAction (payload) {
    return {
        type : USER_ACTION,
        payload : payload
    }
}