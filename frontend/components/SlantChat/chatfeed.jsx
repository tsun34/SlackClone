import React from 'react';
import ChatMessage from './chatmessage';
import Chatform from './chatform';

class Chatfeed extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        const oldMessages = this.props.messages;
        const receiveMessage = this.props.receiveMessage;
        return (
            <>  
                <div className='channel-log'>
                    <div className='channel-info'>
                        <div className='channel-info-text'>
                            <a href="">channel name</a>
                            <ul>
                                <li><a href="#"><i className='fas fa-thumbtack'></i></a></li>
                                <li><a href="#">description</a></li>
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
                <Chatform receiveMessage = {receiveMessage}/>
            </>
        ) 
    }
}


export default Chatfeed;