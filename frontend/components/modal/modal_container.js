import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProp = ({ ui }) => {
    return {
        modal: ui.modal
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(Modal);