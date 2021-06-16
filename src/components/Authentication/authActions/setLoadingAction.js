import {LOADING_ACTION} from '../constants'
export default function loadingAction (payload) {
    return {
        type : LOADING_ACTION,
        payload : payload
    }
}