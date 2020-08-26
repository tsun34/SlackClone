import React, { Fragment } from 'react';
import GreetingContainer from '../Greeting/GreetingContainer';
import ChatlistContainer from './chatlist_container';
import ChatfeedContainer from './chatfeed_container';
import ChatformContainer from './chatform_container';

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
        </div>)
    }
}

export default SlantChat;