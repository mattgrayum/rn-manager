import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="main">
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Add an Employee"
                    />
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                    />

                </Scene>

                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Please Login"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent