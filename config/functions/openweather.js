const axios = require('axios');

module.exports = async (result) => {
  const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${result.lat}&lon=${result.lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`);

  return {
    temp: data.main.temp,
    weather: data.weather[0].description
  };
};

