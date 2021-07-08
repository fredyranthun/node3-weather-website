const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZnJlZHlyYW50aHVuIiwiYSI6ImNrcXMydjZ1bjF2cDcyb3Bldzdubjd3eG0ifQ.qg3kPoXkpfl-cIWrYF09HQ&limit=1`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Geolocation Service.', undefined)
        } else if (body.message || body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0]
            const placeName = body.features[0].place_name
            callback(undefined, {
                latitude: latitude,
                longitude: longitude,
                location: placeName
            })
        }
    })
}

module.exports = geocode
