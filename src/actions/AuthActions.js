import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOADING
} from './types'

export const loginUser = ({ email, password }) => {

    return dispatch => {

        showSpinner(dispatch)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(error => loginUserFail(dispatch, error, email))
            })
    }
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
    Actions.employeeList() //navigate to the next scene
}

const loginUserFail = (dispatch, error, email) => {
    dispatch({
        type: LOGIN_USER_FAIL,
        payload: { error, email }
    })
}

const showSpinner = dispatch => {
    dispatch({ type: LOADING })
}