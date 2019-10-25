const socket = io() // establishes websocket connection

const message = document.querySelector('input')

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    socket.emit('sendMessage', message.value)

    message.value = ''
})

socket.on('receiveMessage', (message) => {
    console.log(message)
})

socket.on('welcomeUser', (message) => {
    console.log(message)
})

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })