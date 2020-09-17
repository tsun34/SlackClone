import {connect} from 'react-redux';
import SlantChat from './slant_chat';
import {selectAllConversations} from '../../reducers/selector';
import {getConversations} from '../../actions/conversation_actions';
import {getAllUsers} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
    conversations: selectAllConversations(state),
});
// // console.log('state chat: ', state)
// // console.log('ownProps chat: ', ownProps)
// return {
//     test: 'test message'
//     // conversationId: ownProps.match.params.conversationId
// }

const mapDispatchToProps = (dispatch) => ({
    getConversations: () => dispatch(getConversations()),
    getAllUsers: () => dispatch(getAllUsers())
});

const SlantChatContainer = connect(mapStateToProps, mapDispatchToProps)(SlantChat);

export default SlantChatContainer;