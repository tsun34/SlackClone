import { connect } from "react-redux";
import NewDMForm from "./dmform";
import { createConversation, getConversations } from "../../../actions/conversation_actions";
import { createSubscription, getSubscriptions } from "../../../actions/subscription_actions";
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        allUsers: state.entities.users,
        allSubs: state.entities.subscriptions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createConversation: (convo, redirect) => dispatch(createConversation(convo, redirect)),
        createSubscription: (sub) => dispatch(createSubscription(sub)),
        getConversations: () => dispatch(getConversations()),
        getSubscriptions: (convoId) => dispatch(getSubscriptions(convoId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDMForm);