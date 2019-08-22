// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.getTimestamp())
// console.log(id.toHexString())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected correctly!')

    const db = client.db(databaseName)

    // db.collection('users').findOne({ name: 'Andrew'}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch', error)
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27}).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5d566b3198c9ae59ea626ec1") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
})