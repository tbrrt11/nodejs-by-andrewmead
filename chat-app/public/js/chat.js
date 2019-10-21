const socket = io() // establishes websocket connection

socket.on('countUpdated', (count) => {
    console.log('The count has been updated', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked')
    socket.emit('increment')
})