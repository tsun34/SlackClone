import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = Object.freeze({id: null});

const sessionReducer = (session = _nullUser, action) => {
    Object.freeze(session);
    // console.log('session reducer called')
    switch (action.type){
        case RECEIVE_CURRENT_USER: 
            // console.log('recieve user')
            return {id : action.currentUser.id};
        case LOGOUT_CURRENT_USER: 
            return _nullUser;
        default: 
            return session;
    }
}

export default sessionReducer;