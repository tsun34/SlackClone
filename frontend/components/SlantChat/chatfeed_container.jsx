import { connect } from "react-redux";
import {withRouter} from 'react-router';
import Chatfeed from './chatfeed';
import { getConversation, getConversations } from "../../actions/conversation_actions";
import {createMessage, receiveMessage} from '../../actions/message_actions';
import {getAllUsers} from '../../actions/session_actions';
import { openModal, openModalWithProps } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const conversationId = ownProps.match.params.conversationId;
    const conversation = state.entities.conversations[ownProps.match.params.conversationId]
    return {
        convoMessages: Object.keys(state.entities.messages).map(id => state.entities.messages[id]), 
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        conversationId: conversationId , 
        conversation: conversation
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getConversation: id => dispatch(getConversation(id)),
        getConversations: () => dispatch(getConversations()),
        createMessage: (message) => dispatch(createMessage(message)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        getAllUsers: () => dispatch(getAllUsers()),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal, modalProps) => dispatch(openModalWithProps(modal, modalProps))
    }
};
const ChatfeedContainer = connect(mapStateToProps, mapDispatchToProps)(Chatfeed);

export default withRouter(ChatfeedContainer);