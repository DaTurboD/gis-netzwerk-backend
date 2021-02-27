const axios = require('axios');

module.exports = async () => {
  const { data } = await axios.get('endpoint');

  await strapi.query('locations').create({
    date: new Date(),
    lat: data.lat,
    lon: data.on,
  });
};
