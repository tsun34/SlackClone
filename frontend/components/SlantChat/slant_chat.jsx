import React, { Fragment } from 'react';
import GreetingContainer from '../Greeting/GreetingContainer';
import ChatlistContainer from './chatlist_container';
import ChatfeedContainer from './chatfeed_container';
import ChatWebSocket from './chat_websocket';


class SlantChat extends React.Component{

    render(){
        return (        
        <div className='main-slant'>
            <nav className='slant-nav'>
                <GreetingContainer />
            </nav>
            <div className="slant-chat">
                <div className='channel-side'>
                    <p>channel list</p>
                    {/* <ChatlistContainer /> */}
                </div>
                <div className='chat-side'>
                    <ChatfeedContainer />
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