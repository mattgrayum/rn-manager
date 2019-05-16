import React from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import { createStore } from 'redux'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'
import { Header } from './src/components/common'

class App extends React.Component {

  componentWillMount() {

    const config = {
      apiKey: 'AIzaSyDxGeAdGYZLpyuJqL-ueaYLY_GqVnk_vrk',
      authDomain: 'manager-9522b.firebaseapp.com',
      databaseURL: 'https://manager-9522b.firebaseio.com',
      projectId: 'manager-9522b',
      storageBucket: 'manager-9522b.appspot.com',
      messagingSenderId: '830271348290',
      appId: '1:830271348290:web:1f6ed9f2c09e292a'
    }

    firebase.initializeApp(config)

  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Header headerText="Manager App" />
        <LoginForm />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default App
