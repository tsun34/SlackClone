import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';

import GreetingContainer from '../Greeting/GreetingContainer';
import ChatlistContainer from './chatlist_container';
import ChatlistItem from './chatlist_item';
import ChatfeedContainer from './chatfeed_container';
import ChatWebSocket from './chat_websocket';


class SlantChat extends React.Component{

    componentDidMount(){
        this.props.getConversations();
        this.props.getAllUsers();
    }
    
    render(){
        const conversations = Object.values(this.props.conversations); 

        return (        
            <div className='main-slant'>
            <nav className='slant-nav'>
                <GreetingContainer />
            </nav>
            <div className="slant-chat">
                <div className='channel-side'>

                    <ChatlistContainer conversations={conversations}/>
                </div>
                <div className='chat-side'>
                    <Route path="/client/conversations/:conversationId" component={ChatfeedContainer}/>
                </div>
            </div>

        </div>)
    }
}

export default SlantChat;