import firebase from 'firebase'
import 'firebase/firestore'
import FireStore from '../FireStore'
import { EMPLOYEE_ADDED } from './types'



export const addEmployee = (name, phone, shift) => {

    return dispatch => {

        const db = firebase.firestore()
        const id = firebase.auth().currentUser.uid
        const userRef = getUserRef(db, id)
        const newEmployee = { name, phone, shift }
        const employees = {
            employees: firebase.firestore.FieldValue.arrayUnion({ name, phone, shift })
        }
        const newUser = {
            ...employees,
            email: firebase.auth().currentUser.email
        }

        userRef.get()
            .then(doc => {
                if (doc.exists) {
                    userRef.update(employees)
                }
                else {
                    userRef.set(newUser)
                }
            })
            .catch(error => console.log(error))
    }
}

const getUserRef = (db, userId) => {
    return db.collection('users').doc(userId)
}

const docExists = (ref) => {

    ref.get()
        .then(doc => {
            console.log(doc)
            if (doc.exists) {
                return true
            }
            return false
        })
        .catch(error => console.log(error))
}

const updateEmployees = (dispatch, userRef, newEmployee) => {
    userRef.set({ employee: newEmployee })
        .then(data => {
            console.log('data: ', data)
            dispatch({
                type: EMPLOYEE_ADDED,
                payload: newEmployee
            })
        })
        .catch(error => console.log('error: ', error))
}