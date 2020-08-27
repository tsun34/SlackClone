import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import messageReducer from './message_reducer';
import conversationReducer from './conversation_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messageReducer,
    conversations: conversationReducer
})

export default entitiesReducer;