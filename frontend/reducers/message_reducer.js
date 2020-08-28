import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";

const initialState = {}
//     1:{
//         id: 1,
//         body: '',
//         author_id: 1,
//         conversation_id: 1
//     }
// }

const messageReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type){
        case RECEIVE_MESSAGE:
            nextState = Object.assign({}, state);
            nextState[action.message.id] = action.message;
            return nextState;
        case RECEIVE_MESSAGES:
            for (let i=0; i<action.messages.length; i++){
                let message = action.messages[i];
                nextState[message.id] = message;
            }
            return nextState;
        case RECEIVE_CONVERSATION:
            // nextState = Object.assign({},state);
            nextState = action.data.messages;
            return nextState;
        default:
            return state;
    }
}

export default messageReducer;