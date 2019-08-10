const request  = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/4c23c9c89b7284638b635fd89a358211/${latitude},${longitude}?units=si`
    
    request({ url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error || body === 'Not Found\n') {
            callback('Unable to find location,', body)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + (body.currently.precipProbability*100).toFixed(2) + "% chance of rain.")
        }
    })
}

module.exports = forecast