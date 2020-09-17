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

    componentDidMount(){
        // console.log('chat fetching all convos')
        // this.props.getConversations();
        // this.props.getAllUsers();
        // console.log(this.props.conversations)
    }

    // componentDidUpdate(prevProps) {
    //     console.log('update?')
    //     if (prevProps.match.params.conversationId !== this.props.match.params.conversationId) {
    //         this.props.getConversations();
    //         this.props.getAllUsers();
    //         // this.props.getConversation(this.props.match.params.conversationId);
    //     }
    // }
    
    render(){
        // const conversations = Object.values(this.props.conversations); 

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
                    {/* <Route path="/client/conversations/:conversationId" component={ChatfeedContainer}/> */}
                </div>
            </div>

        </div>)
    }
}

export default SlantChat;