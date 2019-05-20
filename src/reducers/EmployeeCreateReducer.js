import {
    INPUT_TEXT_CHANGED,
    EMPLOYEE_ADDED
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_TEXT_CHANGED:
            const { text, inputName } = action.payload
            return { ...state, [inputName]: text }
        case EMPLOYEE_ADDED:
            const { name, phone, shift } = action.payload
            return { ...state, name, phone, shift }
        default:
            return state
    }
}