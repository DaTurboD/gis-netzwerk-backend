'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    ctx.request.body.locations.map((feature, i) => (
      console.log(feature)
   
    ))
  },
};
