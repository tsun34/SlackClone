// get all msg in a conversation
export const getMessages = (conversation_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/conversations/${conversation_id}/messages`
    })
)

// create a new msg
export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: '/api/messages',
        data: {message}
    })
)

// edit a msg
export const editMessage = (message) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/messages/${message.id}`,
        data: {message}
    })
)