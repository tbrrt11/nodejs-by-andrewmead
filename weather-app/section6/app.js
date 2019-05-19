const request = require('request')

const url = 'https://api.darksky.net/forecast/4c23c9c89b7284638b635fd89a358211/-24,25?units=si&lang=pt'

request({ url: url, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.error || response.body === 'Not Found\n') {
        console.log('Unable to find location,', response.body)
    } else {
        console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + (response.body.currently.precipProbability*100).toFixed(2) + "% chance of rain." )
    }
})

const address = "rua prefeito angelo lopes 140 curitiba brasil"
const pesquisa = address.replace(' ', '%20')
const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pesquisa}.json?access_token=pk.eyJ1IjoidGJycnQxMSIsImEiOiJjanZ1djdtaHozdmozNDhxb3BtNWtqcjRpIn0.vbdJu_79Sa9yxcBFdrBbsw&limit=1`

request({ url: geocodeUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocode service.')
    } else if (response.body.message) {
        console.log('Unable to find location,', response.body)
    } else if (response.body.features.length === 0) {
        console.log('Not a single location found for the given address.')
    } else {
        const coordinates = response.body.features[0].center
        const location = response.body.features[0].place_name
        const weatherUrl = `https://api.darksky.net/forecast/4c23c9c89b7284638b635fd89a358211/${coordinates[1]},${coordinates[0]}?units=si`
        console.log(location)
    }
})

// const pesquisa = "paris"
// const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pesquisa}.json?access_token=pk.eyJ1IjoidGJycnQxMSIsImEiOiJjanZ1djdtaHozdmozNDhxb3BtNWtqcjRpIn0.vbdJu_79Sa9yxcBFdrBbsw&limit=1`

// request({ url: geocodeUrl, json: true}, (error, response) => {    
//     const coordinates = response.body.features[0].center
//     const location = response.body.features[0].place_name

//     const weatherUrl = `https://api.darksky.net/forecast/4c23c9c89b7284638b635fd89a358211/${coordinates[1]},${coordinates[0]}?units=si`

//     // console.log(`Weather situation in ${location}`)
//     console.log(location)

//     request({ url: weatherUrl, json: true}, (error, response) => {
//         const today = response.body.daily.data[0]        
        
//         const currently = response.body.currently
//         const temperature = currently.temperature
//         const precipProbability = currently.precipProbability*100
        
//         console.log(today.summary + " It is currently " + temperature +
//                     " degrees out. There is a " + precipProbability.toFixed(2) +
//                     "% chance of rain." )
//     })
// })