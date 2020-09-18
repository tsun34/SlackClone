import React from 'react';

class MemberInfo extends React.Component{
    render(){
        return (
            <div className='dm-search-item'>
                <img className='chat-message-avatar' src={window.gooseAvatar[this.props.member.avatar]} alt=""/>
                <span className='dm-search-item-text'>{this.props.member.full_name}</span>
            </div>
        )
    }
}

export default MemberInfo;