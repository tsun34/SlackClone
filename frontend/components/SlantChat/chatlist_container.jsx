import Chatlist from "./chatlist";
import { connect } from "react-redux";
import {openModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch) => ({
    openModal: (modal) => dispatch(openModal(modal))

});

const ChatlistContainer = connect(mapStateToProps, mapDispatchToProps)(Chatlist);

export default ChatlistContainer;