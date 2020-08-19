import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './Greeting/GreetingContainer';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Slant - Searchable Logs of All Niche Topics</h1>
            <GreetingContainer />
        </header>

        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
    </div>
)

export default App;