import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './App';
import actionCable from 'actioncable';

const CableApp = {};
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <App cableApp = {CableApp} />
        </HashRouter>
    </Provider>
);

export default Root;