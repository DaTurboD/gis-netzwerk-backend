'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const feature = {
        lat: ctx.request.body.locations.geometry.coordinates[0],
        lon: ctx.request.body.locations.geometry.coordinates[1],
        battery_level: ctx.request.body.properties.battery_level,
        battery_state: ctx.request.body.properties.battery_state,
        timestamp: ctx.request.body.properties.timestamp,
    }
    console.log(feature)
    return {
      feature
  },
};
