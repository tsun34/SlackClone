import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';

import GreetingContainer from '../Greeting/GreetingContainer';
import ChatlistContainer from './chatlist_container';
import ChatfeedContainer from './chatfeed_container';
import { uniqueId } from '../../util/chat_util';


class SlantChat extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return (        
            <div className='main-slant'>
            <nav className='slant-nav'>
                <GreetingContainer />
            </nav>
            <div className="slant-chat">
                <div className='channel-side '>

                    <ChatlistContainer />
                </div>
                <div className='chat-side '>
                    <ChatfeedContainer />
                </div>
                
            </div>

        </div>)
    }
}

export default SlantChat;