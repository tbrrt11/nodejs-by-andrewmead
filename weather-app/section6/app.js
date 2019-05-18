const request = require('request')

const url = 'https://api.darksky.net/forecast/4c23c9c89b7284638b635fd89a358211/-25.433984,-49.243957?units=si&lang=pt'

request({ url: url, json: true}, (error, response) => {
    const daily = response.body.daily
    const dayOne = daily.data[0]
    
    const currently = response.body.currently
    const temperature = currently.temperature
    const precipProbability = currently.precipProbability*100
    
    console.log(dayOne.summary + " It is currently " + temperature +
                " degrees out. There is a " + precipProbability.toFixed(2) + "% chance of rain." )
})