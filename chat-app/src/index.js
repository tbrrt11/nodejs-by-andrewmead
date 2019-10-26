const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')

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

    socket.emit('message', generateMessage("Welcome!"))
    socket.broadcast.emit('message', generateMessage("A new user has joined!"))

    socket.on('sendMessage', (message, callback) => {
        console.log("New message received.")

        const filter = new Filter()

        if (filter.isProfane(message)) {
            return callback('Message was not delivered! Profanity is not allowed!')
        }

        io.emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (location, callback) => {
        io.emit('locationMessage', `https://www.google.com/maps?q=${location.latitude},${location.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left!'))
    }) 
})

server.listen(port, () => {
    console.log('Server is up on port ' + port)
})