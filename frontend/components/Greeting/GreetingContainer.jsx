import {connect} from 'react-redux';
import Greeting from './Greeting';
import {logout} from '../../actions/session_actions';

const mapStateToProps = ({session, entities: {users}}) => ({
    currentUser: users[session.id]
});
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting);

export default GreetingContainer;