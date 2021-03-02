'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const feature = {
        lat: ctx.request.body.locations.geometry,
        lon: ctx.request.body.locations.geometry,
        battery_level: ctx.request.body.properties,
        battery_state: ctx.request.body.properties,
        timestamp: ctx.request.body.properties,
    }
    console.log(feature)
    return {
      feature
    }
  },
};
