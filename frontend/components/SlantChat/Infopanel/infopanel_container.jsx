import { connect } from 'react-redux';
import InfoPanel from "./infopanel";
import { withRouter } from 'react-router-dom';
import {closeInfoPanel} from '../../../actions/infopanel_actions';
import { getSubscriptions } from '../../../actions/subscription_actions';

const mapStatesToProps = (state, ownProps) => ({
    infoPanel: state.ui.infopanel,
    subscriptions: Object.values(state.entities.subscriptions),
    allUsers: state.entities.users
    // channel: state.entities.conversations[ownProps.match.params.id]
});

const mapDispatchToProps = (dispatch) => ({
    closeInfoPanel: () => dispatch(closeInfoPanel()),
    getSubscriptions: (convoId) => dispatch(getSubscriptions(convoId))
})

const InfoPanelContainer = connect(mapStatesToProps, mapDispatchToProps)(InfoPanel);

export default withRouter(InfoPanelContainer);
