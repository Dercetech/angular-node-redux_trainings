// const Promise = require('bluebird');

module.exports = function(logger, ENV, exitCodes, socketService) {
  const interface = { start };
  const { port } = ENV.socket;

  function start() {
    // Start socket server
    logger.spam('[main] server starting...');
    socketService.start().then(err => {
      if (err) {
        logger.error('[main] server error: ', err);
        process.exit(exitCodes.SOCKET_START_ERROR);
      }

      logger.info('[main] server ready');
      logger.info('[main] socket ready on http://localhost:' + port);
    });
  }

  return interface;
};
