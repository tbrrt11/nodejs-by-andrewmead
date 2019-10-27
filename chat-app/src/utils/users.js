const users = []

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
    
    // const index = users.findIndex((user) => user.id === id)

    // if (index !== -1) {
    //     return users[index]
    // }
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room) 
}

// addUser({
//     id: 22,
//     username: ' Thiago',
//     room: 'Manaus   '
// })

// addUser({
//     id: 42,
//     username: ' ViCTor',
//     room: ' Manaus   '
// })

// addUser({
//     id: 32,
//     username: ' Matheus',
//     room: 'Curitiba   '
// })

// console.log(getUser(3))
// console.log(getUsersInRoom('manaus'))
// console.log(getUsersInRoom('sdas'))

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}