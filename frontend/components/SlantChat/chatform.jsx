import React from 'react';
import {uniqueId} from '../../util/chat_util';
// import ChatToolbar from './chatform_toolbar';

class Chatform extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            author_id: this.props.authorId,
            conversation_id: this.props.convoId,
            conversation_name: this.props.convoName
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            conversation_id: nextProps.convoId,
            conversation_name: nextProps.convoName
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createMessage(this.state);
        this.setState({
            body: "",
            author_id: this.props.authorId,
            conversation_id: this.props.convoId
        })
        
    }

    updateBody(e){
        this.setState({body: e.target.value});
    }

    render(){
        return(
            <form className='channel-form' id='channel-form' onSubmit={this.handleSubmit}>
                <textarea id="" row='3' value={this.state.body} onChange={this.updateBody} placeholder={`Send a message to ${this.state.conversation_name}`} required></textarea>
                <ul className='channel-form-links'>
                    <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </ul>
                {/* <ChatToolbar/> */}
            </form>
        )

    }
}

export default Chatform;