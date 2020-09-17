import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SlantHomeContainer from './SlantHome/slant_home_container';
import SlantChatContainer from './SlantChat/slant_chat_container';
import ModalContainer from './modal/modal_container';


class App extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className='slant-display'>
                <Switch>
                    <ProtectedRoute exact path='/client' component={SlantChatContainer}/>
                    <ProtectedRoute exact path='/client/conversations/:conversationId' component={SlantChatContainer} />
                    <AuthRoute exact path='/login' component={LoginFormContainer} />
                    <AuthRoute exact path='/signup' component={SignupFormContainer} />

                    <Route exact path='/' component={SlantHomeContainer} />
                    <Redirect to='/' />
                    {/* <ProtectedRoute path='/client' component={SlantChatContainer}/> */}
                
                </Switch>
                <ModalContainer />
            </div>
        )
    }
}

export default App;