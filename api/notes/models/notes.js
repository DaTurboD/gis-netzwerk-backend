'use strict';
const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

async function getWeatherData(data) {

    const home = [47.852410, 12.134108]
    const cords = data.lat == null && data.lon == null ? home : [data.lat, data.lon]
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`)
    return {
        cords: cords,
        temp: weather.data.main.temp,
        weather: weather.data.weather[0].main
    }
}

module.exports = {
    lifecycles: {
        async beforeCreate(data) {

            // set weather data
            const weatherData = await getWeatherData(data)

            data.temperature = weatherData.temp
            data.weather = weatherData.weather
            data.lat = weatherData.cords[0]
            data.lon = weatherData.cords[1]

        },
    }
};
