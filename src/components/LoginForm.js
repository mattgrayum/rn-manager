import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button, Spinner } from './common'
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

    renderButton = () => {
        if (this.props.loading) {
            return <Spinner />
        }
        return <Button buttonText="Login" onPress={this.onPress} />
    }

    renderMsg = () => {
        const { error, msg } = this.props

        if (error || error === false) {
            return <Text style={this.styles.errorTextStyle()}>{msg}</Text>
        }
    }

    render() {

        return (
            <View>
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
                        {this.renderButton()}
                    </CardSection>
                </Card>
                {this.renderMsg()}
            </View>
        )
    }

    styles = {
        errorTextStyle: () => {
            return {
                fontSize: 20,
                alignSelf: 'center',
                paddingTop: 20,
                color: this.props.msgColor
            }
        }
    }
}



const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error,
        msg: state.auth.msg,
        msgColor: state.auth.msgColor
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