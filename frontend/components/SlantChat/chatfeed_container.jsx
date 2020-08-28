import { connect } from "react-redux";
import Chatfeed from './chatfeed';
import { allMessages, selectConvoMessages } from "../../reducers/selector";
import { getConversation } from "../../actions/conversation_actions";
import {createMessage, receiveMessage} from '../../actions/message_actions';
import {getAllUsers} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    const conversation = state.entities.conversations[ownProps.match.params.conversationId];
    return {
        // messages: allMessages(state)
        conversation,
        convoMessages: Object.keys(state.entities.messages).map(id => state.entities.messages[id]), //selectConvoMessages(state, conversation),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getConversation: id => dispatch(getConversation(id)),
        createMessage: (message) => dispatch(createMessage(message)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        getAllUsers: () => dispatch(getAllUsers())
    }
};
const ChatfeedContainer = connect(mapStateToProps, mapDispatchToProps)(Chatfeed);

export default ChatfeedContainer;