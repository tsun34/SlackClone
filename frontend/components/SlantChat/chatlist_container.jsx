import Chatlist from "./chatlist";
import { connect } from "react-redux";
import {openModal, openModalWithProps} from '../../actions/modal_actions';
import { getConversations } from "../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => {
    // console.log( "state: ", state);
    // console.log("ownProps: ", ownProps)
    return {
        currentUser: state.entities.users[state.session.id],
        conversations: Object.values(state.entities.conversations),
        
    };
};

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    getConversations: () => dispatch(getConversations()),
    

});

const ChatlistContainer = connect(mapStateToProps, mapDispatchToProps)(Chatlist);

export default ChatlistContainer;