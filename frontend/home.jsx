import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, logout, signup} from './actions/session_actions';
import { allMessages, selectConvoMessages } from './reducers/selector';
import { getConversation, getConversations, createConversation, deleteConversation } from './actions/conversation_actions';
import { createMessage } from './actions/message_actions';

document.addEventListener('DOMContentLoaded', () => {

    let store;
    
    if (window.currentUser) {
        const preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        // delete window.currentUser;
    }else{
        store = configureStore();
    }

    // TESTING START
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.allMessages = allMessages;
    window.getConversations = getConversations;  
    window.getConversation = getConversation;  
    window.selectConvoMessages = selectConvoMessages;
    window.createMessage = createMessage;
    // TESTING END
    
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl);
});