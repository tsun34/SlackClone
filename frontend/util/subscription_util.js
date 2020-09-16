// get all subscriptions in a conversation
export const getSubscriptions = (conversation_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/conversations/${conversation_id}/subscriptions`
    })
)

// create a new subscription
export const createSubscription = (subscription) => (
    $.ajax({
        method: 'POST',
        url: '/api/subscriptions',
        data: {subscription}
    })
)

