const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// geocode('jenna marbles', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })

// forecast(-75.7088, 44.1545, (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//     }
// })

geocode('curitiba rua prefito angelo lopes 140', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Forecast for", data.location)
        forecast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})