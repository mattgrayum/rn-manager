import {
    INPUT_TEXT_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOADING
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: null,
    firebaseError: null,
    msg: '',
    msgColor: '',
    user: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case INPUT_TEXT_CHANGED:
            const { text, inputName } = action.payload
            return { ...state, [inputName]: text }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                email: '',
                password: '',
                loading: false,
                error: false,
                msg: 'Success!',
                msgColor: 'green',
                user: action.payload.user
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                email: action.payload.email,
                password: '',
                loading: false,
                error: false,
                firebaseError: action.payload.error,
                msg: 'Authentication Failed',
                msgColor: 'red'
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                msg: ''
            }
        default:
            return state
    }
}