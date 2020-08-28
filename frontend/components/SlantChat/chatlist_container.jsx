import Chatlist from "./chatlist";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]

});

const mapDispatchToProps = (dispatch) => ({

});

const ChatlistContainer = connect(mapStateToProps, mapDispatchToProps)(Chatlist);

export default ChatlistContainer;