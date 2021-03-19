'use strict';
const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async beforeCreate(data) {

            // set weather data
            const weatherData = await strapi.config.functions.getWeather(data)
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
