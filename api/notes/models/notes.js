'use strict';
const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

async function getWeatherData(data) {

    const currentLocation = await strapi.config.functions.getLocation();
    const cords = data.lat == null && data.lon == null ? [currentLocation.lat, currentLocation.lon] : [data.lat, data.lon]
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cords[0]}&lon=${cords[1]}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`)
    return {
        cords: cords,
        temp: weather.data.main.temp,
        weather_main: weather.data.weather[0].main,
        weather_description: weather.data.weather[0].description,
        weather_icon: weather.data.weather[0].icon
    }
}

module.exports = {
    lifecycles: {
        async beforeCreate(data) {

            // set weather data
            const weatherData = await getWeatherData(data)
            console.log(weatherData)
            data.temperature = weatherData.temp
            data.weather_main = weatherData.weather_main
            data.weather_description = weatherData.weather_description
            data.weather_icon = weatherData.weather_icon
            data.lat = weatherData.cords[0]
            data.lon = weatherData.cords[1]

        },
    }
};
