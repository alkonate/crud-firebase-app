import {ISAUTH_ACTION} from '../constants'
export default function loadingAction (payload) {
    return {
        type : ISAUTH_ACTION,
        payload : payload
    }
}