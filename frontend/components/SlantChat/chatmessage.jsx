import React from 'react';

class ChatMessage extends React.Component{

    render(){
        const msg = this.props.message;
        let author = this.props.author;
        if (author == undefined){
            author = {full_name: 'New User', avatar: 0}
        }
        console.log('HALLO')
        console.log(author)
        return(
            <li className='chat-message' key={msg.id}>
                <img className='chat-message-avatar' src={window.gooseAvatar[author.avatar]} alt=""/> 
                <div className='chat-message-content'>
                    <div className='chat-message-header'>
                        <strong>{author.full_name}</strong>
                        <span>{msg.created_at}</span>
                    </div>
                    <span>{msg.body}</span>
                </div>
            </li>
        )
    }
}


export default ChatMessage;