import React from 'react';
import {Link} from 'react-router-dom';

const ChatlistItem = ({conversation}) => {
    return conversation.name ? (
    <li key={conversation.id} className='chatlist-item'> 
        <Link to={`/client/conversations/${conversation.id}`}>
            <span>#{conversation.name}</span>
        </Link>
    </li>) : null
}

export default ChatlistItem;