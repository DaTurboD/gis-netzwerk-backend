'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterCreate(result) {
            const weatherData = await strapi.config.functions.openweather(result)
            result.temperature = weatherData.temp
            result.weather = weatherData.weather
        },
    }
};
