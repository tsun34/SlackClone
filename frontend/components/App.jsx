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

class App extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     currentUser: null,
        //     allConversations: [],
        //     currentConversation:{
        //         conversation: {},
        //         users: [],
        //         messages: []
        //     }
        // }
    }    

    // componentDidMount(){

    // }

    // updateApp(newConversation){
    //     this.setState({
    //         currentConversation: {
    //             conversation: newConversation,
    //             users: newConversation.users,
    //             messages: newConversation.messages
    //         }
    //     })

    // }

    // getConversationData(id){
    //     // fetch(`http://localhost:3000/conversations/${id}`)
    //     // .then(response => response.json())
    //     getConversation(id)
    //     .then(result => {
    //         this.setState({
    //             currentConversation: {
    //                 conversation: result.data,
    //                 users: result.datat.attributes.users,
    //                 messages: result.data.attributes.messages
    //             }
    //         })
    //     })
    // }

    render() {
        return (
            <div className='slant-display'>

                <Route exact path='/' component={SlantHome} />
                <AuthRoute path='/login' component={LoginFormContainer} />
                <AuthRoute path='/signup' component={SignupFormContainer} />
                <ProtectedRoute path='/client' component={SlantChatContainer}/>
            </div>
        )
    }
}

export default App;