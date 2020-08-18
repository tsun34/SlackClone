import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const sessionErrorsReducer = (errors=[], action) => {
    Object.freeze(errors);

    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default: 
            return errors;
    }
}

export default sessionErrorsReducer;