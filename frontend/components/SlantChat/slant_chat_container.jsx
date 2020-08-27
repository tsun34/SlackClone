import {connect} from 'react-redux';
import SlantChat from './slant_chat';
import {selectAllConversations} from '../../reducers/selector';
import {getConversations} from '../../actions/conversation_actions';

const mapStateToProps = (state) => ({
    conversations: selectAllConversations(state),

});

const mapDispatchToProps = (dispatch) => ({
    getConversations: () => dispatch(getConversations())
});

const SlantChatContainer = connect(mapStateToProps, mapDispatchToProps)(SlantChat);

export default SlantChatContainer;