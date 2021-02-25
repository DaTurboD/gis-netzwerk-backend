'use strict';
const fetch = require("node-fetch");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const sendWebmention = (data) => {
    async function sendData() {
      console.log("hi")
    }
    data.publishOnTwitter ? sendData() : null;
}

module.exports = {

    lifecycles: {
        afterCreate(result) {
        },
    }
};
