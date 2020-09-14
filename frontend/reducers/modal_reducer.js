import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_WITH_PROPS } from '../actions/modal_actions';

const ModalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { modal: action.modal };
        case CLOSE_MODAL:
            return null;
        case OPEN_MODAL_WITH_PROPS:
            return { modal: action.modal, modalProps: action.modalProps }
        default:
            return state;
    }
}

export default ModalReducer;