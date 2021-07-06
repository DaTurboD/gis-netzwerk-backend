'use strict';

module.exports = {
// Add your own logic here (e.g. send a queue of email, create a database backup, etc.).

    '0 0 0 * * *': () => {
      strapi.config.functions.getGarminConnectActivities();

    },

};
