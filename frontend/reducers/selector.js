export const allMessages = (state) => {
    return Object.keys(state.messages).map(id => state.messages[id])
}