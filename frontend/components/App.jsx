import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './Greeting/GreetingContainer';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SlantHome from './SlantHome/slant_home';


const App = () => (
    <div>
        <header>
            {/* <h1>Slant - Searchable Logs of All Niche Topics</h1> */}
            <GreetingContainer />
        </header>
        <Route exact path='/' component={SlantHome}/>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </div>
)

export default App;