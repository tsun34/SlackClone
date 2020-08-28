import * as ConversationUtil from '../util/conversation_util';

// regular actions
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const receiveConversation = (data) => ({
    type: RECEIVE_CONVERSATION,
    data
})

export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const receiveConversations = (conversations) => ({
    type: RECEIVE_CONVERSATIONS,
    conversations
})

export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';
export const removeConversation = (conversationId) => ({
    type: REMOVE_CONVERSATION,
    conversationId
})

// thunk actions
export const getConversation = (id) => (dispatch) => {
    return ConversationUtil.getConversation(id).then((conversation) => (
        dispatch(receiveConversation(conversation))
    ))
}

export const getConversations = () => (dispatch) => {
    return ConversationUtil.getConversations().then((conversations) => (
        dispatch(receiveConversations(conversations))
    ))
}

export const createConversation = (conversation) => (dispatch) => {
    return ConversationUtil.createConversation(conversation).then((conversation) => (
        dispatch(receiveConversation(conversation))
    ))
}

export const deleteConversation = (conversationId) => (dispatch) => {
    return ConversationUtil.deleteConversation(conversationId).then((conversation) => (
        dispatch(removeConversation(conversation.id))
    ))
}