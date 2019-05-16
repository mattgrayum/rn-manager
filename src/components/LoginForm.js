import React from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'


class LoginForm extends React.Component {

    onPress = () => {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    onEmailChange = text => {
        this.props.emailChanged(text)
    }

    onPasswordChange = text => {
        this.props.passwordChanged(text)
    }

    render() {

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
        loginUser
    }
)(LoginForm)