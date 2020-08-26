export const getConversation = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/conversations/${id}`
    })
)

export const getConversations = () => (
    $.ajax({
        method: 'GET',
        url: '/api/conversations'
    })
)