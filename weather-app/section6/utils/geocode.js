const request = require('request')

const geocode = (address, callback) => { 
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGJycnQxMSIsImEiOiJjanZ1djdtaHozdmozNDhxb3BtNWtqcjRpIn0.vbdJu_79Sa9yxcBFdrBbsw&limit=1`
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.message) {
            callback(`Unable to find location, please check your request URL. Message: ${body.message}`, undefined)
        } else if (body.features.length === 0) {
            callback('Not a single location for the given address.', undefined)
        } else {
            callback(undefined, {latitude: body.features[0].center[1],
                                 longitude: body.features[0].center[0],
                                 location: body.features[0].place_name})
        }
    })
}

module.exports = geocode