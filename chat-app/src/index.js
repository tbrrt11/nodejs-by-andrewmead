const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// server (emit) -> client (receive) - countUpdated
// client (emit) -> server (receive) - increment

let count = 0;

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    let message = "Welcome!"

    socket.emit('welcomeUser', message)

    socket.on('sendMessage', (message) => {
        console.log("New message received.")

        io.emit('receiveMessage', message)
    })

    // socket.emit('countUpdated', count)

    // socket.on('increment', () => {
    //     count++
    //     // socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
    // })
})



server.listen(port, () => {
    console.log('Server is up on port ' + port)
})