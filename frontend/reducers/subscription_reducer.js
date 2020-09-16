import { RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION } from "../actions/subscription_actions";
import { RECEIVE_CONVERSATION } from "../actions/conversation_actions";


const subscriptionReducer = (state ={}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type){
        case RECEIVE_SUBSCRIPTION:
            nextState = Object.assign({}, state);
            nextState[action.subscription.id] = action.subscription;
            return nextState;
        case RECEIVE_SUBSCRIPTIONS:
            nextState = Object.assign({}, action.subscriptions);
            return nextState;
        case RECEIVE_CONVERSATION:
            nextState = action.data.subscriptions;
            return nextState;
        default:
            return state;
    }
}

export default subscriptionReducer;