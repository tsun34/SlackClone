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
                <div className="new-convo-form">
                    <h2>Create a New Channel</h2>
                    <form onSubmit={this.handleClick}>
    
                        <label>Name
                            <br/>
                            <input type="text" onChange={this.onChangeUpdate('name')} placeholder="# e.g.spooky-honk" value={this.state.name}/>
                        </label>
                        <br/>
                        <label>Description (optional)
                            <br/>
                            <textarea onChange={this.onChangeUpdate('description')} value={this.state.description} ></textarea>
                        </label>
                        <br/>
                        <label>Make private
                            <p>When a channel is set to private, it can only be viewed or joined by invitation.</p>
                            <label className="switch">
                                <input type="checkbox" onClick={this.handlePrivate}/>
                                <span className="slider round"></span>
                            </label>
                        </label>
                        <br/>
                        <button>Create</button>
                    </form>
                </div>
            )
        }else{
            return (<Redirect to={`/client/conversations/${this.state.newChannelId}`}/>)
        }
    }
}

export default NewConvoForm;