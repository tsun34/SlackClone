import { RECEIVE_CONVERSATION, RECEIVE_CONVERSATIONS, REMOVE_CONVERSATION } from "../actions/conversation_actions";

const conversationReducer = (conversation = {}, action) => {
    Object.freeze(conversation);
    let nextConvo = Object.assign({}, conversation);
    switch (action.type){
        case RECEIVE_CONVERSATION:
            const convoId = action.data.conversation.id;
            nextConvo[convoId] = action.data.conversation;
            return nextConvo;
        case RECEIVE_CONVERSATIONS:
            nextConvo = action.conversations;
            return nextConvo;
        case REMOVE_CONVERSATION: 
            nextConvo[action.conversationId] = undefined;
            return nextConvo;
        default: 
            return conversation;
    }
}

export default conversationReducer;