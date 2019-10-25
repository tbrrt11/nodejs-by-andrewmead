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