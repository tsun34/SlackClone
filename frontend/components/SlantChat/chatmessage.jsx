import React from 'react';

class ChatMessage extends React.Component{
    render(){
        const msg = this.props.message
        return(
            <li className='chat-message' key={msg.id}>
                <img className='chat-message-avatar' src="" alt=""/> 
                <div className='chat-message-content'>
                    <div className='chat-message-header'>
                        <strong>{msg.author_id}</strong>
                        <span>msg sent time</span>
                    </div>
                    <span>{msg.body}</span>
                </div>
            </li>
        )
    }
}


export default ChatMessage;