import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (users = {}, action) => {
    Object.freeze(users)

    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, users, {[action.currentUser.id]: action.currentUser})
        default:
            return users;
    }
};

export default usersReducer;