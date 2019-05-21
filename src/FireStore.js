import firebase from 'firebase'
import 'firebase/firestore'

const FireStore = () => {

    const config = {
        apiKey: 'AIzaSyDxGeAdGYZLpyuJqL-ueaYLY_GqVnk_vrk',
        authDomain: 'manager-9522b.firebaseapp.com',
        databaseURL: 'https://manager-9522b.firebaseio.com',
        projectId: 'manager-9522b',
        storageBucket: 'manager-9522b.appspot.com',
        messagingSenderId: '830271348290',
        appId: '1:830271348290:web:1f6ed9f2c09e292a'
      }

    if(!firebase.apps.length){
        firebase.initializeApp(config)
    }

    const db = firebase.firestore()

    const signIn = (email, password) => 
        firebase.auth().signInWithEmailAndPassword(email, password)

    const createUser = (email, password) => 
        firebase.auth().createUserWithEmailAndPassword(email, password)

    const getCurrentUser = () => firebase.auth().currentUser

    const userId = getCurrentUser().uid

    const getUserRef = (db, userId) => db.collection('users').doc(userId)
    
    const userRef = getUserRef(db, userId)

    const employees = {
        employees: firebase.firestore.FieldValue.arrayUnion({ name, phone, shift })
    }

    const newUserEmployee = {
        ...employees,
        email: firebase.auth().currentUser.email
    }

    const addEmployee = () => {
        userRef.get()
            .then(doc => {
                if (doc.exists) {
                    userRef.update(employees)
                }
                else {
                    userRef.set(newUserEmployee)
                }
            })
            .catch(error => console.log(error))
    }

        



    return {
        db, 
        signIn,
        createUser
    }
}

export default FireStore


  