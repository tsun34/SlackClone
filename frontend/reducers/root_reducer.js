import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import messageReducer from './message_reducer';
import conversationReducer from './conversation_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    messages: messageReducer,
    conversation: conversationReducer
})

export default rootReducer;