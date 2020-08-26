import * as ConversationUtil from "../util/conversation_util";


export const getConversation = (id) => (dispatch) => {
    return ConversationUtil.getConversation().then()
}

export const getConversations = () => (dispatch) => {
    return ConversationUtil.getConversations().then()
}