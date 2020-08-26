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