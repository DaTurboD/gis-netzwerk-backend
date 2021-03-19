const axios = require('axios');

module.exports = async (data) => {
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
};
