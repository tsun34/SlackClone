import React from 'react';

class SearchTag extends React.Component {
    render() {
        return (
            <div className='dm-search-tag'>
                <img className='chat-message-avatar' src={window.gooseAvatar[this.props.avatar]} alt="" />
                <span className='dm-search-tag-name'>{this.props.name}</span>
                <span onClick={this.props.removeTag}><i className="fas fa-times-circle"/></span>
            </div>
        )
    }
}

export default SearchTag;