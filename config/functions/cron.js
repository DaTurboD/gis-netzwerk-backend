'use strict';

module.exports = {
// Add your own logic here (e.g. send a queue of email, create a database backup, etc.).

    '* * 21 * * *': () => {
      strapi.config.functions.getGarminConnectActivities();

    },

};
