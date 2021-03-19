const axios = require('axios');

module.exports = async () => {
  async function getCurrentLocation() {
    const locations = await axios.get(`https://api.mxd.codes/locations?_sort=id:desc`)

    return {
        lat: locations.data[0].lat, 
        lon: locations.data[0].lon
    }
}
