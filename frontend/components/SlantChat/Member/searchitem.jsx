import React from 'react';

class SearchItem extends React.Component{
    render(){
        if (this.props.message === ""){
            return (
                <div className='dm-search-item' onClick={this.props.handleSelect}>
                    <img className='chat-message-avatar' src={window.gooseAvatar[this.props.avatar]} alt=""/>
                    <span className='dm-search-item-text'>{this.props.name}</span>
                </div>

            ) 
        } else{
            return (
                <span>{this.props.message}</span>
            )
        }
    }
}

export default SearchItem;