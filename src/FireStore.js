import firebase from 'firebase'

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

    const init = () => firebase.initializeApp(config)

    return {
        init
    }
}

export default FireStore


  