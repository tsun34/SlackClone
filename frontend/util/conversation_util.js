
// get a convo
export const getConversation = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/conversations/${id}`
    })
)

// get all convo-s
export const getConversations = () => (
    $.ajax({
        method: 'GET',
        url: '/api/conversations'
    })
)

// create a new convo 
export const createConversation = (conversation) => (
    $.ajax({
        method: 'POST',
        url: '/api/conversations',
        data: {conversation}
    })
) 

// delete a convo
export const deleteConversation = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/conversations/${id}`,
    })
) 