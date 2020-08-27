import React from 'react';
import {Link} from 'react-router-dom';

const ChatlistItem = ({conversation}) => (
    <li key={conversation.id}> 
        <Link to={`/client/conversations/${conversation.id}`}>
            <span>{conversation.name}</span>
        </Link>
    </li>
)

export default ChatlistItem;