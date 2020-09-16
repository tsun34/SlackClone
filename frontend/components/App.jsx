import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SlantHome from './SlantHome/slant_home';
import SlantChat from './SlantChat/slant_chat';
import { getConversation } from '../util/conversation_util';
import SlantChatContainer from './SlantChat/slant_chat_container';
import { getCurrentUser } from '../util/session_api_util';
import ModalContainer from './modal/modal_container';


class App extends React.Component{
    constructor(props){
        super(props);

    render() {
        return (
            <div className='slant-display'>

                <Route exact path='/' component={SlantHome} />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <ProtectedRoute path='/client' component={SlantChatContainer}/>
                <ModalContainer />
            </div>
        )
    }
}

export default App;