import React from 'react';
import ChatlistItem from './chatlist_item';
import { uniqueId } from '../../util/chat_util';

class Chatlist extends React.Component{

    render(){
        const conversations = this.props.conversations;
        const currentUser = this.props.currentUser;
        const gooseAvatars = [window.kingGooseURL, window.queenGooseURL, window.default_goose1, window.default_goose2, window.default_goose3, window.default_goose4, window.default_goose5, window.default_goose6];

        const currentUserAvatar = gooseAvatars[currentUser.avatar];
        return (
            <>
                <div className="workspace-header">
                    <div>
                        <h1 className='workspace-name'>Untitled Garden</h1>
                        <span className='workspace-user'>{currentUser.full_name}</span>
                    </div>
                    <img src={currentUserAvatar} alt=""/>
                    {/* <div>{currentUser.avatar}</div> */}
                </div>

                <div>
                    <div>
                        <span>Channels</span>
                        <ul>
                            {conversations.map(convo => <ChatlistItem key={uniqueId+Math.random()} conversation={convo} />)}
                        </ul>
                    </div>
                    <div>
                        <span>Direct Messages</span>
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