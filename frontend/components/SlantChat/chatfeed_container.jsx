import { connect } from "react-redux";
import Chatfeed from './chatfeed';
import { allMessages, selectConvoMessages } from "../../reducers/selector";
import { getConversation } from "../../actions/conversation_actions";
import {receiveMessage} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    // console.log()
    const conversation = state.entities.conversations[ownProps.match.params.conversationId];
    return {
        // messages: allMessages(state)
        conversation,
        convoMessages: selectConvoMessages(state, conversation),

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getConversation: id => dispatch(getConversation(id)),
        receiveMessage: (message) => dispatch(receiveMessage(message))
    }
};
const ChatfeedContainer = connect(mapStateToProps, mapDispatchToProps)(Chatfeed);

export default ChatfeedContainer;