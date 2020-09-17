import { connect } from 'react-redux';
import SlantHome from './slant_home';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => ({

})

const SlantHomeContainer = connect(mapStateToProps,mapDispatchToProps)(SlantHome);
export default SlantHomeContainer;