import React from 'react';
import { Route } from 'react-router-dom';

import ChatMessage from './chatmessage';
import Chatform from './chatform';

class Chatfeed extends React.Component{
    constructor(props){
        super(props)
        App.cable.subscriptions.create(
            {channel: 'ConversationChannel'},
            {received: (msg) => {
                this.props.receiveMessage(msg);
                this.props.getAllUsers();
            }}
        )
    }

    componentDidMount(){
        this.props.getConversation(this.props.match.params.conversationId);
  
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.conversationId !== this.props.match.params.conversationId){
            this.props.getConversation(this.props.match.params.conversationId);
        }
    }


    render(){
        
        const conversation = this.props.conversation;
        const oldMessages = this.props.convoMessages;
        const createMessage = this.props.createMessage;
        const currentUser = this.props.currentUser;
        const allUsers = this.props.users;
        if (!oldMessages){
            return null;
        }
        // console.log(this.props)
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
                        {oldMessages.map(msg => <ChatMessage key={msg.id} message={msg} author={allUsers[msg.author_id]}/>)}
                    </ul>
                </div>
                <Chatform createMessage={createMessage} convoId={conversation.id} authorId={currentUser.id} />
            </>
        ) 
    }
}


export default Chatfeed;