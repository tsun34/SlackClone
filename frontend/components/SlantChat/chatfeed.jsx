import React from 'react';
import { Route } from 'react-router-dom';

import ChatMessage from './chatmessage';
import Chatform from './chatform';

class Chatfeed extends React.Component{
    constructor(props){
        super(props)
        App.cable.subscriptions.create(
            {channel: 'ConversationChannel'},
            {received: (msg) => this.props.receiveMessage(msg)}
        )
    }

    componentDidMount(){
        console.log('chatfeed mounted!!!')
        this.props.getConversation(this.props.match.params.conversationId);
        // create subscription to that conversation_channel
        // App.subscription.create blah blah (channel to sub as obj, {callbacks (ex: received: receiveMessage())} )
        // setup App needed in cable.js
    }

    componentDidUpdate(prevProps){
        console.log('update??')
        if (prevProps.match.params.conversationId !== this.props.match.params.conversationId){
            this.props.getConversation(this.props.match.params.conversationId);
        }
    }


    render(){
        
        const conversation = this.props.conversation;
        const oldMessages = this.props.convoMessages;
        const createMessage = this.props.createMessage;
        const currentUser = this.props.currentUser;
        
        if (!oldMessages){
            return null;
        }
        
        return (
            <>  
                <div className='channel-log'>
                    <div className='channel-info'>
                        <div className='channel-info-text'>
                            <a href="">{conversation.name}</a>
                            <ul>
                                <li><a href="#"><i className='fas fa-thumbtack'></i></a></li>
                                <li><a href="#">{conversation.description}</a></li>
                            </ul>
                        </div>
                        <ul className='channel-info-links'>
                            <li><a href="#"><i className='fas fa-user-plus'></i></a></li>
                            <li><a href="#"><i className='fas fa-info-circle'></i></a></li>
                        </ul>
                    </div>  
                    <ul className='channel-content'>
                        {oldMessages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                    </ul>
                </div>
                <Chatform createMessage={createMessage} convoId={conversation.id} authorId={currentUser.id} />
            </>
        ) 
    }
}


export default Chatfeed;