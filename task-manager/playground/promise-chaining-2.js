require('./../src/db/mongoose')
const Task = require('./../src/models/task')

Task.findByIdAndDelete('5d6a4826fa51ff273eccb1ec').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})