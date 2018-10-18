module.exports = function factory(logger) {
  // Let's over-engineer the following...
  //   socket.on('test', (param0, param1) => { ... } )

  // Handle "test" messages
  const test = (param0, param1) => {
    logger.spam(`[socket > inbound data] incomming socket data`);
    logger.spam(`[socket > inbound data] -> type: ${'test'}`);
    logger.spam(`[socket > inbound data] -> param0: ${param0}`);
    logger.spam(`[socket > inbound data] -> param1: ${param1}`);
  };

  // Prepare handlers
  const handlers = { test };

  // Register each handler to its matching action type
  registerSocketActions = socket =>
    Object.keys(handlers)
      .map(key => ({ key, handler: handlers[key] }))
      .forEach(({ key, handler }) => socket.on(key, handler));

  return { registerSocketActions };
};
