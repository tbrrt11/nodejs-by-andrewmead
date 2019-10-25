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

    socket.emit('message', "Welcome!")
    socket.broadcast.emit('message', "A new user has joined!")

    socket.on('sendMessage', (message) => {
        console.log("New message received.")

        io.emit('message', message)
    })

    socket.on('sendLocation', (location) => {
        io.emit('message', `https://www.google.com/maps?q=${location.latitude},${location.longitude}`)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    }) 
})



server.listen(port, () => {
    console.log('Server is up on port ' + port)
})