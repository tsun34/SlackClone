import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';

import GreetingContainer from '../Greeting/GreetingContainer';
// import ChatlistContainer from './chatlist_container';
import ChatlistItem from './chatlist_item';
import ChatfeedContainer from './chatfeed_container';
import ChatWebSocket from './chat_websocket';


class SlantChat extends React.Component{

    componentDidMount(){
        this.props.getConversations();
    }
    
    render(){
        console.log(this.props)
        const conversations = this.props.conversations; 
        return (        
            <div className='main-slant'>
            <nav className='slant-nav'>
                <GreetingContainer />
            </nav>
            <div className="slant-chat">
                <div className='channel-side'>
                    <p>channel list</p>
                    <ul>
                        {conversations.map(convo => <ChatlistItem key={convo.id} conversation={convo} />)}
                    </ul>
                </div>
                <div className='chat-side'>
                    <Route path="/client/conversations/:conversationId" component={ChatfeedContainer}/>
                </div>
            </div>

            {/* <ChatWebSocket 
                cableApp = {this.props.cableApp}
                updateApp = {this.props.updateApp}
                getConversationData = {this.props.getConversationData}
                conversationData = {this.props.conversationData}
            /> */}
        </div>)
    }
}

export default SlantChat;