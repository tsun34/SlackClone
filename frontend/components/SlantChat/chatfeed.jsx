import React from 'react';
import { Route } from 'react-router-dom';

import ChatMessage from './chatmessage';
import Chatform from './chatform';
import InfoPanelContainer from './Infopanel/infopanel_container';


class Chatfeed extends React.Component{
    constructor(props){
        super(props)
        App.cable.subscriptions.create(
            {channel: 'ConversationChannel'},
            {received: (msg) => {
                this.props.receiveMessage(msg);
                // this.props.getAllUsers();
            }}
        )
        this.onAddMember = this.onAddMember.bind(this);
        this.showInfoPanel = this.showInfoPanel.bind(this);
    }

    componentDidMount(){
        // console.log('mount?')
        this.props.getConversations();
        this.props.getConversation(this.props.conversationId);
        this.props.getAllUsers();
    }

    componentDidUpdate(prevProps){
        // console.log('update?', prevProps)
        if (prevProps.match.params.conversationId !== this.props.match.params.conversationId){
            this.props.getConversation(this.props.match.params.conversationId);
            this.props.getAllUsers();
        }

    }


    onAddMember(e){
        e.preventDefault();
        const conversation = this.props.conversation
        this.props.openModalWithProps('add_member',{
           channelName: conversation.name,
           channelId: conversation.id 
        });
    }

    showInfoPanel(e){
        e.preventDefault();
        this.props.openInfoPanel();
    }

    render(){

        const conversation = this.props.conversation || {name: '', description: '', id: this.props.conversationId};
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
                            <li onClick={this.onAddMember}><i className='fas fa-user-plus'></i></li>
                            <li onClick={this.showInfoPanel}><i className='fas fa-info-circle'></i></li>
                        </ul>
                    </div>  
                    <ul className='channel-content '>
                        {oldMessages.map(msg => <ChatMessage key={msg.id} message={msg} author={allUsers[msg.author_id]}/>)}
                    </ul>
                <Chatform createMessage={createMessage} convoId={conversation.id} convoName={conversation.name} authorId={currentUser.id} />
            </div>
            <div>
                {/* {console.log(this.props.infopanel)} */}
                {this.props.infopanel ? <InfoPanelContainer convoId={conversation.id} convoName={conversation.name} convoDescription={conversation.description} /> : null}
            </div>
            </>
        ) 

    }
}


export default Chatfeed;