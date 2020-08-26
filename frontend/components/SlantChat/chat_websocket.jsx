import React from 'react';

class ChatWebSocket extends React.Component{
    componentDidMount(){
        this.props.getConversationData(window.location.href.match(/\d+$/)[0])
    
        this.props.cableApp.conversation = this.props.cableApp.cable.subscriptions.create({
            channel: 'ConversationChannel',
            conversation: window.location.href.match(/\d+$/)[0]
        },
        {
            received: (updatedConversation) => {
                this.props.updateApp(updatedConversation)
            }
        })    
    }

    render(){
        return (
            <div></div>
        )
    }

}

export default ChatWebSocket;