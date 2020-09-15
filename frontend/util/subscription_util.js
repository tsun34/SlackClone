//

// create a new subscription
export const createSubscription = (sub) => (
    $.ajax({
        method: 'POST',
        url: '/api/subscriptions',
        data: {sub}
    })
)

// delete subscription
export const deleteSubscription = (subId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/subscriptions/${subId}`
    })
)