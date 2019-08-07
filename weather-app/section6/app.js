const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

yargs.command({
    command: 'forecast',
    describe: 'Get forecast for an address',
    builder: {
        address: {
            describe: 'Address to be searched',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        geocode(argv.address, (error, { latitude, longitude, location }) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Forecast for", location)
                forecast(latitude, longitude, (error, data) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log(data)
                    }
                })
            }
        })
    }
})

// yargs.parse()

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address.')
} else {
    geocode(process.argv[2], (error, { latitude, longitude, location }) => {
        if (error) {
           return console.log(error)
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                }
                console.log("Forecast for", location, '\n', forecastData)
            })
        }
    })    
}
