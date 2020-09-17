import React from 'react';

import SearchItem from '../Member/searchitem';
import SearchTag from '../Member/searchtag';

class AddMemberForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchStr: '',
            selected: []
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.renderSelected = this.renderSelected.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }


    handleSearchInput(e) {
        this.setState({ searchStr: e.target.value });
    }

    renderSelected() {
        return this.state.selected.map(userId => {
            let user = this.props.allUsers[userId];
            return (
                <SearchTag avatar={user.avatar} name={user.full_name} removeTag={() => this.handleRemoveTag(userId)} key={userId} />
            )
        })
    }

    matches() {
        const matches = [];
        Object.values(this.props.allUsers).forEach((user) => {
            const sub = user.full_name.slice(0, this.state.searchStr.length)
            if (sub.toLowerCase() === this.state.searchStr.toLowerCase()) {
                matches.push(user);
            }
        })
        return matches;
    }

    handleSelect(userId) {
        if (!this.state.selected.includes(userId)) {
            let newSelected = [...this.state.selected, userId]
            this.setState({ selected: newSelected })
        }
    }

    handleRemoveTag(userId) {
        let userIdx = this.state.selected.indexOf(userId);
        this.state.selected.splice(userIdx, 1)
        this.setState({ selected: this.state.selected })

    }

    handleClick(e){
        e.preventDefault();
        this.state.selected.map((user) => {
            this.props.createSubscription({
                user_id: user,
                conversation_id: this.props.channelId
            })
        })
        this.props.getSubscriptions(this.props.channelId);
        this.props.closeModal();
    }

    render(){
        let users = this.matches().map(user => {
            return (
                <SearchItem message="" avatar={user.avatar} name={user.full_name} handleSelect={() => this.handleSelect(user.id)} key={user.id} />
            )
        })

        return (
            <form className='new-convo-form'>
                <h2 className='convo-form-name'>Add People</h2>
                <h3 className='add-member-channel-name'>#{this.props.channelName}</h3>
                <div className='dm-search-selected'>
                    {(this.state.selected.length>0) ? this.renderSelected() : ''}
                </div>
                <div className='dm-form-search'>
                    <input className='convo-form-input' type="text" value={this.state.searchStr} onChange={this.handleSearchInput} placeholder="Enter a username" />
                    <button className='dm-form-submit' onSubmit={this.handleClick}>Go</button>
                </div>
                <div className='dm-search-results pointer'>
                    <div>
                        {users.length === 0 ?
                            (<SearchItem message="No matches" />)
                            : (users)}
                    </div>
                </div>
            </form>
        )

    }

}

export default AddMemberForm;