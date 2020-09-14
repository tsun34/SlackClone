import { connect } from "react-redux";
import NewConvoForm from "./convoform";
import { createConversation, getConversations } from "../../../actions/conversation_actions";
import {closeModal} from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        closeModal: () => dispatch(closeModal()),
        createConversation: (convo) => dispatch(createConversation(convo)),
        getConversations: () => dispatch(getConversations())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewConvoForm);