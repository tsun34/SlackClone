import {connect} from 'react-redux';
import SlantChat from './slant_chat';
import {selectAllConversations} from '../../reducers/selector';
import {getConversations} from '../../actions/conversation_actions';
import {getAllUsers} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
    conversations: selectAllConversations(state),
    
});


const mapDispatchToProps = (dispatch) => ({
    getConversations: () => dispatch(getConversations()),
    getAllUsers: () => dispatch(getAllUsers())
});

const SlantChatContainer = connect(mapStateToProps, mapDispatchToProps)(SlantChat);

export default SlantChatContainer;