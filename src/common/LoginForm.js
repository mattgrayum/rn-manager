import React from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'
import {Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends React.Component{

    state = { 
        email: '', 
        password: '', 
        msg: '', 
        error: false,
        loading: false
    }

    onPress = () => {

        const { email, password } = this.state

        // Initialize state on each login attempt.
        this.setState({ msg: '', error: false, loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onCreateNewUser.bind(this))
                    .catch(this.onLoginError.bind(this))                
            })
    }

    onLoginError = () => {

        this.setState({ 
            error: true,
            msg: 'Authenticataion Failed',
            email: '',
            password: '',
            loading: false
        })

    }

    setSuccessState = newUser => {

        const msg = newUser ? 'A new account was created.' : 'Login Successful!'

        this.setState({
            loading: false,
            error: false,
            msg: msg,
            email: '',
            password: ''
        })

    }

    onCreateNewUser = () => {
        this.setSuccessState(true)
    }

    onLoginSuccess = () => {
        this.setSuccessState()
    }

    renderButton = () => {

        if(this.state.loading){
            return ( <Spinner size='small'/> )
        }

        return (
            <Button 
                buttonText="Log In"
                onPress={ this.onPress.bind(this) }
            />
        )
    }

    render() {

        const { errorTextStyle } = this.styles

        return (
            <View>
                <Card>
                    
                    <CardSection>
                        <Input 
                            label='Email' 
                            placeholder='example@gmail.com'
                            value={ this.state.email }
                            onChangeText={ email => this.setState({ email }) } 
                        />
                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            label='Password' 
                            placeholder='Secure password'
                            value={ this.state.password }
                            onChangeText={ password => this.setState({ password }) }
                            secureTextEntry={true}
                        />
                    </CardSection>

                    <CardSection>
                        { this.renderButton() }
                    </CardSection>

                </Card>

                <Text style={errorTextStyle()}>{ this.state.msg }</Text>

            </View>
        )
    }

    styles = {
        errorTextStyle: () => {
            const color = this.state.error ? 'red' : 'green'
            return {
                fontSize: 20,
                alignSelf: 'center',
                paddingTop: 20,
                color: color
            }
        }
    }
}

export default LoginForm