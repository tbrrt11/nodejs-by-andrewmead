const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number || String
    }
})

// const me = new User({ 
//     name: 'Matheus',
//     age: 32
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const homework = new Task({
    description: 'Finish school homework',
    completed: false
})

homework.save().then(() => {
    console.log(homework)
}).catch((error) => {
    console.log(error)
})