import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION } from "../actions/subscription_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";


const subscriptionReducer = (state ={}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type){
        case RECEIVE_SUBSCRIPTION:
            nextState = Object.assign({}, state);
            nextState = [action.subscription.id] = action.subscription;
            return nextState;
        case RECEIVE_SUBSCRIPTIONS:
            for (let i=0; i<action.subscriptions.length; i++){
                let subscription = action.subscriptions[i];
                nextState[subscription.id] = subscription;
            };
            return nextState;
        case RECEIVE_CONVERSATION:
            nextState = action.data.subscriptions;
            return nextState;
        default:
            return state;
    }
}

export default subscriptionReducer;