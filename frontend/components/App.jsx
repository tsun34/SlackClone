import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './Greeting/GreetingContainer';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util'


const App = () => (
    <div>
        <header>
            <h1>Slant - Searchable Logs of All Niche Topics</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
)

export default App;