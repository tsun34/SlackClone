import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import {signup, login, logout} from './util/session_api_util';
// import { receiveCurrentUser } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
    // console.log('content loaded :)');

    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    const store = configureStore();
    const rootEl = document.getElementById('root');

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.receiveCurrentUser = receiveCurrentUser;

    ReactDOM.render(<h1>Slant home page</h1>, rootEl);
});