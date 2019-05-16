import { EMAIL_CHANGED } from '../actions/types'
import { PASSWORD_CHANGED } from '../actions/types'
import { LOGIN_PRESSED } from '../actions/types'

const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_PRESSED:

        default:
            return state
    }
}