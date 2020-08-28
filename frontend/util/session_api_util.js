// make an AJAX request to create a new user
export const signup = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
)

// make an AJAX request to create a new session
export const login = (user) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {user}
    })
)

// make an AJAX request to delete the current session
export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)

export const getCurrentUser = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
)

export const getAllUser = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)