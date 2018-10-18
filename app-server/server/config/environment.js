const path = require('path');

module.exports = function factory() {
  const environment = {
    rootFolder: path.join(__dirname, '..'),

    // Allowed log level (0: error, 1: warn, 2: info, 3: spam)
    log: 3,

    http: {
      port: 80,
      host: 'localhost'
    },

    socket: {
      port: 3000
    },

    firebase: {
      projectId: 'mc-node-f1aed',
      databaseURL: 'https://mc-node-f1aed.firebaseio.com',
      keyFilename: path.join(__dirname, 'firebase', 'mc-node-f1aed-firebase-adminsdk-8lbmy-24b13b4b56.json'),
      firestore: {
        settings: { timestampsInSnapshots: true }
      }
    },

    exitCodes: {}
  };

  return environment;
};
