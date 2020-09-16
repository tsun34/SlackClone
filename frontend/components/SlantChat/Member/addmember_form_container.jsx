import { connect } from "react-redux";
import AddMemberForm from './addmember_form';
import { createSubscription, getSubscriptions } from "../../../actions/subscription_actions";
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    const channelId = ownProps.match.params.conversationId;
    const channelName = state.entities.conversations[ownProps.match.params.conversationId];
    return {
        channelId,
        channelName,
        allUsers: state.entities.users,
        allSubs: state.entities.subscriptions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createSubscription: (sub) => dispatch(createSubscription(sub)),
        getSubscriptions: (convoId) => dispatch(getSubscriptions(convoId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMemberForm);