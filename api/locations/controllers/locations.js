'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const features = []
    ctx.request.body.locations.map((feature, i) => (
        features.push({
          id: i,
          lat: feature.geometry.coordinates[0],
          lon: feature.geometry.coordinates[1],
          battery_level: feature.properties.battery_level,
        })
    ))
    features.map((feature, i) => (
      return feature
    ))  
  },
};
