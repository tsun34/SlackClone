import { connect } from "react-redux";
import NewDMForm from "./dmform";
import { createConversation, getConversations } from "../../../actions/conversation_actions";
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        allUsers: state.entities.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createConversation: (convo) => dispatch(createConversation(convo)),
        getConversations: () => dispatch(getConversations())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm);