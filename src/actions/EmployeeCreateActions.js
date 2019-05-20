import { EMPLOYEE_ADDED } from './types'

export const addEmployee = (name, phone) => {

    const shift = name === 'matt' ? 'day' : 'night'
    return {
        type: EMPLOYEE_ADDED,
        payload: { name, phone, shift }
    }
}