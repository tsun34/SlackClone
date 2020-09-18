import { connect } from 'react-redux';
import InfoPanel from "./infopanel";
import { withRouter } from 'react-router-dom';
import {closeInfoPanel} from '../../../actions/infopanel_actions';
import { getSubscriptions } from '../../../actions/subscription_actions';

const mapStatesToProps = (state, ownProps) => ({
    infoPanel: state.ui.infopanel,
    allUsers: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
    closeInfoPanel: () => dispatch(closeInfoPanel()),
})

const InfoPanelContainer = connect(mapStatesToProps, mapDispatchToProps)(InfoPanel);

export default withRouter(InfoPanelContainer);
