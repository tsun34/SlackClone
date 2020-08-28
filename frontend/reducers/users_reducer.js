import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS } from "../actions/session_actions";

const initialState = {};

const usersReducer = (users = initialState, action) => {
    Object.freeze(users)

    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, users, {[action.currentUser.id]: action.currentUser})
        case RECEIVE_ALL_USERS:
            return action.users;

        default:
            return users;
    }
};

export default usersReducer;