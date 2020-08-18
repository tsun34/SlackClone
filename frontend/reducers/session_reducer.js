import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _nullUser = Object.freeze({id: null});

const sessionReducer = (session = _nullUser, action) => {
    Object.freeze(session);
    let newSession = Object.assign({}, session);
    switch (action.type){
        case RECEIVE_CURRENT_USER: 
            newSession[id] = action.currentUser.id;
            return newSession;
        case LOGOUT_CURRENT_USER: 
            newSession[id] = null;
            return newSession;
        default: 
            return session;
    }
}

export default sessionReducer;