import firebase from 'firebase'
import { EMAIL_CHANGED } from './types'
import { PASSWORD_CHANGED } from './types'
import { LOGIN_USER_SUCCESS } from './types'

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

export const loginUser = ({ email, password }) => {

    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user })
            })
    }
}