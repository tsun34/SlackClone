import React from "react";
import { Redirect } from "react-router-dom";

class NewConvoForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name: '',
            description: '',
            isPrivate: false,
            newChannelId: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
        this.handlePrivate = this.handlePrivate.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const newConvo = {
          name: this.state.name,
          description: this.state.description,
          is_private: this.state.isPrivate,
          admin_id: this.props.currentUser.id,
          conversation_type: "channel",
        };

        this.props.createConversation(
            newConvo, (id) => {
                this.setState({newChannelId: id});
            }
        ).then(()=>{
            this.props.getConversations();
            this.props.closeModal();
        })
        this.setState({
            name: '',
            description: '',
            isPrivate: false,
        });

    }

    onChangeUpdate(field){
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handlePrivate(e){
        return this.setState({isPrivate: !this.state.isPrivate})
    }

    render(){
        if (!this.state.newChannelId){

            return (
                <form className="new-convo-form" onSubmit={this.handleClick}>
                    <h2 className='convo-form-name'>Create a New Channel</h2>
                    <p className='convo-form-note'>Channels are where your geese comunicates. They're best when organized around a topic - #honking, for example.</p>

                    <label className='convo-form-label'>Name</label>
                    <input className='convo-form-input' type="text" onChange={this.onChangeUpdate('name')} placeholder="# e.g.spooky-honk" value={this.state.name}/>
                    
                    <label className='convo-form-label'>Description (optional)</label>
                    <textarea className='convo-form-input' onChange={this.onChangeUpdate('description')} value={this.state.description} ></textarea>
                    
                    <label className='convo-form-label'>Make private</label>
                    <div className='convo-form-private'>
                        <p className='convo-form-note'>When a channel is set to private, it can only be viewed or joined by invitation.</p>
                        <label className="switch">
                            <input type="checkbox" onClick={this.handlePrivate}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <button className='convo-form-submit'>Create</button>
                </form>
            )
        }else{
            return (<Redirect to={`/client/conversations/${this.state.newChannelId}`}/>)
        }
    }
}

export default NewConvoForm;