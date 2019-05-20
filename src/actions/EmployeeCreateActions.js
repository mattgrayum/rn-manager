import { EMPLOYEE_ADDED } from './types'

export const addEmployee = (name, phone, shift) => {

    return {
        type: EMPLOYEE_ADDED,
        payload: { name, phone, shift }
    }
}