import * as SubscriptionUtil from "../util/subscription_util";

//thunk actions
export const getSubscriptions = (conversation_id) => (dispatch) => {
    return SubscriptionUtil.getSubscriptions(conversation_id).then((subscriptions) => (
        dispatch(receiveSubscriptions(subscriptions))
    ))
};

export const createSubscription = (subscription) => (dispatch) => {
    return SubscriptionUtil.createSubscription(subscription).then((newSubscription) => (
        dispatch(receiveSubscription(newSubscription))
    ))
};

//regular actions
export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const receiveSubscription = (subscription) => {
    return {
        type: RECEIVE_SUBSCRIPTION,
        subscription
    }
};

export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS';
export const receiveSubscriptions = (subscriptions) => {
    return {
        type: RECEIVE_SUBSCRIPTIONS,
        subscriptions
    }
};