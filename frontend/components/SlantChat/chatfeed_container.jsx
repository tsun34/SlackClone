import { connect } from "react-redux";
import Chatfeed from './chatfeed';
import { allMessages } from "../../reducers/selector";
import {receiveMessage} from '../../actions/message_actions';

const mapStateToProps = (state) => {
    return {
        messages: allMessages(state)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        receiveMessage: (message) => dispatch(receiveMessage(message))
    }
};
const ChatfeedContainer = connect(mapStateToProps, mapDispatchToProps)(Chatfeed);

export default ChatfeedContainer;