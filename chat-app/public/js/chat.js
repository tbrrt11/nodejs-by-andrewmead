const socket = io() // establishes websocket connection

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message

    socket.emit('sendMessage', message.value)

    message.value = ''
})

socket.on('message', (message) => {
    console.log(message)
})

// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })