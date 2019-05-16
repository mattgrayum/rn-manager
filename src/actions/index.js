import { EMAIL_CHANGED } from './types'
import { PASSWORD_CHANGED } from './types'
import { LOGIN_PRESSED } from './types'

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginPressed = () => {
    return {
        type: LOGIN_PRESSED
    }
}