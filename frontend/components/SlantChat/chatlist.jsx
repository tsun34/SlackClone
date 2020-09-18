import React from 'react';
import ChatlistItem from './chatlist_item';
import { uniqueId } from '../../util/chat_util';

class Chatlist extends React.Component{

    constructor(props){
        super(props)
        this.onCreateChannel = this.onCreateChannel.bind(this);
        this.onCreateDM = this.onCreateDM.bind(this);
    }

    componentDidMount(){
        this.props.getConversations();
    }


    onCreateChannel(e){
        e.preventDefault();
        this.props.openModal('new_channel');
    }

    onCreateDM(e){
        e.preventDefault();
        this.props.openModal('new_dm');
    }

    render(){
        const conversations = this.props.conversations;
        const currentUser = this.props.currentUser;
        const currentUserAvatar = window.gooseAvatar[currentUser.avatar];

        const allChannels = conversations.filter(convo => convo.conversation_type === 'channel') ;
        const allDms = conversations.filter(convo => convo.conversation_type === 'direct');

        return (
            <>
                <div className="workspace-header">
                    <div>
                        <h1 className='workspace-name'>Untitled Garden</h1>
                        <span className='workspace-user'><span className='dot online'></span>{currentUser.full_name}</span>
                    </div>
                    <img src={currentUserAvatar} alt=""/>
                </div>

                <div className="chatlist ">
                    <div className="chatlist-sub">
                        <div className='chatlist-header'>
                            <span className="chatlist-subtitle">Channels</span>
                            <button className='create-convo-symbol' onClick={this.onCreateChannel}><i className='fas fa-plus'></i></button>
                        </div>
                        <ul>
                            {allChannels.map(convo => <ChatlistItem key={uniqueId+Math.random()} conversation={convo} />)}
                        </ul>
                        <button className="create-convo-words" onClick={this.onCreateChannel}><i className='fas fa-plus'></i> Create New Channel</button>
                    </div>
                    <div className='chatlist-sub'>
                        <div className='chatlist-header'>
                            <span className="chatlist-subtitle">Direct Messages</span>
                            <button className='create-convo-symbol' onClick={this.onCreateDM}><i className='fas fa-plus'></i></button>
                        </div>
                        <ul>
                            {allDms.map(convo => <ChatlistItem key={uniqueId + Math.random()} conversation={convo} />)}
                        </ul>
                        <button className='create-convo-words' onClick={this.onCreateDM}><i className='fas fa-plus'></i> Create New DM</button>
                    </div>
                </div>

            </>            
        )
    }
}

export default Chatlist; 