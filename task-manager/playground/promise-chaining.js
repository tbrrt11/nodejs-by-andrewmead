require('./../src/db/mongoose')
const User = require('./../src/models/user')

// User.findByIdAndUpdate('5d689e48b5c8a60a5dc7a0cd', { age: 2 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 2 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d689e48b5c8a60a5dc7a0cd', 4).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})