import * as APIUtil from '../util/session_api_util';

// thunk action creator, takes in a user object
export const login = (user) => (dispatch) => {
    return APIUtil.login(user).then((user) => (
        dispatch(receiveCurrentUser(user))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
            ));
};

// thunk action creator 
export const logout = () => (dispatch) =>{
    return APIUtil.logout().then((user) => (
        dispatch(logoutCurrentUser())
        ));
};

// thunk action creator 
export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user).then((user) => (
        dispatch(receiveCurrentUser(user))
        ), errors => (
            dispatch(receiveErrors(errors.responseJSON))
            ));
};

// regular action creator 
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};


// regular action creator 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
};

// regular action creator, takes in an array of errors 
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
};

export const getAllUsers = () => (dispatch) => {
    return APIUtil.getAllUser().then((users) => (
        dispatch(receiveAllUsers(users))
    ))
}
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}
