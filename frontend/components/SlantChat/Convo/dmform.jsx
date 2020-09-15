import React from "react";
import { useStore } from "react-redux";
import { Redirect } from 'react-router-dom';

import SearchItem from '../Member/searchitem';
import SearchTag from '../Member/searchtag';

class NewDMForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isPrivate: true,
            newChannelId: null,
            searchStr: "",
            selected: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.renderSelected = this.renderSelected.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.createConversation({
            name: this.state.name,
            is_private: this.state.isPrivate,
            admin_id: this.props.currentUser.id,
            conversation_type: 'direct'
        }).then(() => {
            this.props.getConversations();
            this.props.closeModal();
        })
        this.setState({
            name: '',
            isPrivate: false,
        });
    }

    onChangeUpdate(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSearchInput(e){
        this.setState({searchStr: e.target.value});
    }

    renderSelected(){
        return this.state.selected.map(userId => {
            let user = this.props.allUsers[userId];
            return(
                <SearchTag avatar={user.avatar} name={user.full_name} removeTag={() => this.handleRemoveTag(userId)} key={userId}/>
            )
        }) 
    }

    matches(){
        const matches = [];
        Object.values(this.props.allUsers).forEach((user) => {
            const sub = user.full_name.slice(0, this.state.searchStr.length)
            if (sub.toLowerCase() === this.state.searchStr.toLowerCase()){
                matches.push(user);
            }
        })
        return matches;
    }

    handleSelect(userId){
        console.log("before: ", this.state.selected)
        if(!this.state.selected.includes(userId)){
            let newSelected = [...this.state.selected, userId]
            console.log("after: ", newSelected)
            this.setState({selected: newSelected})
        }
    }

    handleRemoveTag(userId){
        let userIdx = this.state.selected.indexOf(userId);
        this.state.selected.splice(userIdx, 1)
        this.setState({selected: this.state.selected})

    }

    render() {

        let users = this.matches().map(user => {
            return (
                <SearchItem message="" avatar={user.avatar} name={user.full_name} handleSelect={() => this.handleSelect(user.id)} key={user.id} />
            )
        })

        if (!this.state.newChannelId){

            return (
                <div className="new-dm-form">
                <h2>Create a New DM</h2>
                <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.onChangeUpdate('name')} placeholder="# e.g.spooky-honk" value={this.state.name} />
                    <div>
                        {this.renderSelected()}
                        <div>
                            <input type="text" value={this.state.searchStr} onChange={this.handleSearchInput} placeholder="Enter a username"/>
                            <button>Go</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            {users.length === 0 ? 
                            (<SearchItem message="No matches"/>)
                            :(users)}
                        </div>
                    </div>
                </form>
            </div>
           )
        }else{
            return (<Redirect to={`/client/conversations/${this.state.newChannelId}`}/>)    
        }
    }
}

export default NewDMForm;