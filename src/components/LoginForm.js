import React from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged } from './actions'


class LoginForm extends React.Component {

    onPress = () => {

    }

    onEmailChange = text => {
        this.props.emailChanged(text)
    }

    onPasswordChange = text => {

    }

    render() {

        console.log(this.props.email)
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
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm)