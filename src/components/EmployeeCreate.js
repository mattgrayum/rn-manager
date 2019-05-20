import React from 'react'
import { connect } from 'react-redux'
import { inputTextChanged, addEmployee } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends React.Component {

    onPress = () => {
        const { name, phone } = this.props
        this.props.addEmployee(name, phone)
    }

    onChangeText = (inputName, text) => {
        this.props.inputTextChanged(text, inputName)
    }


    render() {

        return (
            <Card>

                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane Doe'
                        onChangeText={this.onChangeText.bind(this, 'name')}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        onChangeText={this.onChangeText.bind(this, 'phone')}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button
                        buttonText='Add Employee'
                        onPress={this.onPress}
                    />
                </CardSection>

            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.employeeCreate.name,
        phone: state.employeeCreate.phone,
        shift: state.employeeCreate.shift
    }
}

export default connect(
    mapStateToProps,
    {
        inputTextChanged,
        addEmployee
    }
)(EmployeeCreate)