import React from 'react';
import ChatlistItem from './chatlist_item';
import { uniqueId } from '../../util/chat_util';

class Chatlist extends React.Component{

    render(){
        const conversations = this.props.conversations;
        const currentUser = this.props.currentUser;

        const currentUserAvatar = window.gooseAvatar[currentUser.avatar];
        return (
            <>
                <div className="workspace-header">
                    <div>
                        <h1 className='workspace-name'>Untitled Garden</h1>
                        <span className='workspace-user'><span className='dot online'></span>{currentUser.full_name}</span>
                    </div>
                    <img src={currentUserAvatar} alt=""/>
                </div>

                <div className="chatlist">
                    <div className="chatlist-sub">
                        <span className="chatlist-subtitle">Channels</span>
                        <ul>
                            {conversations.map(convo => <ChatlistItem key={uniqueId+Math.random()} conversation={convo} />)}
                        </ul>
                    </div>
                    <div className='chatlist-sub'>
                        <span className="chatlist-subtitle">Direct Messages</span>
                        <ul>
                            {conversations.map(convo => <ChatlistItem key={uniqueId + Math.random()} conversation={convo} />)}
                        </ul>
                    </div>
                </div>

            </>            
        )
    }
}

export default Chatlist; 