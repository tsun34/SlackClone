import React from "react";
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
        this.createDMName = this.createDMName.bind(this);
    }


    createDMName(list){
        return list.map((userId) => {
            return this.props.allUsers[userId].full_name
        }).join(', ')
    }

    handleClick(e) {
        e.preventDefault();
        const dmName = this.createDMName(this.state.selected); 
        this.props.createConversation({
            name: dmName,
            is_private: this.state.isPrivate,
            admin_id: this.props.currentUser.id,
            conversation_type: 'direct'
        }, (id) => {
            this.setState({newChannelId: id});
        })
        .then(() => {
            this.props.getConversations();
            this.props.closeModal();
            this.state.selected.map((user) => {
                this.props.createSubscription({
                    user_id: user,
                    conversation_id: this.state.newChannelId 
                })
                this.props.getSubscriptions(this.state.newChannelId);
            })
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
        if(!this.state.selected.includes(userId)){
            let newSelected = [...this.state.selected, userId]
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
                <form className="new-convo-form" onSubmit={this.handleClick}>
                    <h2 className='convo-form-name'>Create a New DM</h2>
                    <div className='dm-search-selected'>
                        {(this.state.selected.length>0) ? this.renderSelected() : ''}
                    </div>
                    <div className="dm-form-search">
                        <input className='convo-form-input' type="text" value={this.state.searchStr} onChange={this.handleSearchInput} placeholder="Enter a username"/>
                        <button className="dm-form-submit">Go</button>
                    </div>
                    <div className="dm-search-results pointer">
                            {users.length === 0 ? 
                            (<SearchItem message="No matches"/>)
                            :(users)}
                    </div>
                </form>
           )
        }else{
            return (<Redirect to={`/client/conversations/${this.state.newChannelId}`}/>)    
        }
    }
}

export default NewDMForm;