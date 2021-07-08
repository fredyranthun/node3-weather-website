const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url =
        `http://api.weatherstack.com/current?access_key=8b85b60a78b63f5c514080013cc8f51c&query=${latitude},${longitude}&units=m`

    request(
        { url, json: true },
        (error, { body }) => {
            if (error) {
                callback('Unable to connect to Weather Forecast service', undefined)
            } else if (body.error) {
                callback('Unable to find location.', undefined)
            } else {
                callback(undefined, {
                    temperature: body.current.temperature,
                    feelsLike: body.current.feelslike,
                    description: body.current.weather_descriptions[0]
                })
            }
        }
    )
}

module.exports = forecast