
import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import infopanelReducer from './infopanel_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    infopanel: infopanelReducer
});

export default uiReducer;