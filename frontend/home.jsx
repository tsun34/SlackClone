import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { getConversations } from './actions/conversation_actions';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');

    let store;
    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            session: {id: window.currentUser.id},
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        const preloadedState = {
            entities: {
                users:{}
            }
        }
        store = configureStore(preloadedState);
    }
    // window.getConversations = getConversations;

    ReactDOM.render(<Root store={store} />, rootEl);
});