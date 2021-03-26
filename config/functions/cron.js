'use strict';

module.exports = {
// Add your own logic here (e.g. send a queue of email, create a database backup, etc.).

    '*/30 * * * * *': () => {
      strapi.config.functions.getGarminConnectActivities();

    },

};
