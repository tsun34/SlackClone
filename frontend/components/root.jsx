import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './App';
// import ActionCableProvider from 'react-actioncable-provider';

// const API_WS_ROOT = 'ws://localhost:3000/cable';


const Root = ({store}) => (
    // <ActionCableProvider url={API_WS_ROOT}>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    // </ActionCableProvider>
);

export default Root;