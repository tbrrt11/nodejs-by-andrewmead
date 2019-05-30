const https = require('https')
const url = 'https://api.darksky.net/forecast/4c23c9c89b7284638b635fd89a358211/40,-75?units=si'

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body, )
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()


