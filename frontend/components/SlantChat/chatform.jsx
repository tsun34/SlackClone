import React from 'react';
import {uniqueId} from '../../util/chat_util';

class Chatform extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            author_id: 1,
            conversation_id: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const message = Object.assign({}, this.state, {id: uniqueId()});
        this.props.receiveMessage(message);
        this.setState({
            body: "",
            author_id: 1,
            conversation_id: 1
        })
    }

    updateBody(e){
        this.setState({body: e.target.value});
    }

    render(){
        return(
            <form className='channel-form' onSubmit={this.handleSubmit}>
                <textarea id="" row='3' value={this.state.body} onChange={this.updateBody} placeholder='Send a message' required></textarea>
                <ul className='channel-form-links'>
                    <button><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </ul>

            </form>
        )

    }
}

export default Chatform;