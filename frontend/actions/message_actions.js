import * as MessageUtil from '../util/message_util';


// thunk actions
export const getMessages = (conversation_id) => (dispatch) => {
    return MessageUtil.getMessages(conversation_id).then((messages) => (
        dispatch(receiveMessages(messages))
    ))
}

export const createMessage = (message) => (dispatch) => {
    return MessageUtil.createMessage(message).then((message) => (
        dispatch(receiveMessage(message))
    ))
}

export const editMessage = (message) => (dispatch) => {
    return MessageUtil.editMessage(message).then((message) => (
        dispatch(receiveMessage(message))
    ))
}

// regular actions
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }
}

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}