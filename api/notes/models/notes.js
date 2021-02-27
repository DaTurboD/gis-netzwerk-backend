'use strict';
const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

async function getWeatherData(result) {

    let cords
    const home = [47.852410, 12.134108]
    result.lat && result.lon ? cords = [result.lat, result.lon] : cords = home
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`)
    return {
        temp: weather.data.main.temp,
        weather: weather.data.weather[0].description
    }
}

module.exports = {
    lifecycles: {
        async afterCreate(result) {

            // set weather data
            const weatherData = await getWeatherData(result)

            result.temperature = weatherData.temp
            result.weather = weatherData.weather
            return
        },
    }
};
