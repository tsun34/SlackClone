export const allMessages = (state) => {
    return Object.keys(state.entities.messages).map(id => state.entities.messages[id])
}

export const selectAllConversations = (state) => {
    return Object.keys(state.entities.conversations).map(id => state.entities.conversations[id])
}

export const selectConvoMessages = (state, convo) => {
    return convo? convo.messages : [];
}