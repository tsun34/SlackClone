import React from 'react';
import {uniqueId} from '../../util/chat_util';

class Chatform extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            author_id: this.props.authorId,
            conversation_id: this.props.convoId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // const message = Object.assign({}, this.state, {id: uniqueId()});
        // this.props.createMessage(message);
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
        // console.log(this.props)
        return(
            <form className='channel-form' id='channel-form' onSubmit={this.handleSubmit}>
                <textarea id="" row='3' value={this.state.body} onChange={this.updateBody} placeholder='Send a message' required></textarea>
                <ul className='channel-form-links'>
                    <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </ul>

            </form>
        )

    }
}

export default Chatform;