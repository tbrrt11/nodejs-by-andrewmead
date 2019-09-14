require('./../src/db/mongoose')
const Task = require('./../src/models/task')

// Task.findByIdAndDelete('5d6a4826fa51ff273eccb1ec').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteAndCountNotCompleted = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteAndCountNotCompleted('5d6a5d553a3af02d31ee67a4fd').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})