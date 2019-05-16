import React from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginPressed } from '../actions'


class LoginForm extends React.Component {

    onPress = () => {
        this.props.loginPressed()
    }

    onEmailChange = text => {
        this.props.emailChanged(text)
    }

    onPasswordChange = text => {
        this.props.passwordChanged(text)
    }

    render() {
        console.log(this.props.password)
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        label="Email"
                        placeholder="email@gmail.com"
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        label="Password"
                        placeholder="Secure password"
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button
                        buttonText="Login"
                        onPress={this.onPress}
                    />
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(
    mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        loginPressed
    }
)(LoginForm)