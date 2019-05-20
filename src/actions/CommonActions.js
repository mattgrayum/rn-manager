import { INPUT_TEXT_CHANGED } from './types'

export const inputTextChanged = (text, inputName) => {
    return {
        type: INPUT_TEXT_CHANGED,
        payload: { text, inputName }
    }
}