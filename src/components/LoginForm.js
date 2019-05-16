import React from 'react'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends React.Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Secure password"
                    />
                </CardSection>
                <CardSection>
                    <Button buttonText="Login" />
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm