'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    location: (ctx) => {
        // `ctx.request` doesn't contain any data sent in the POST request,
        // see screenshot.
        console.log(ctx.request);
      } 
};
