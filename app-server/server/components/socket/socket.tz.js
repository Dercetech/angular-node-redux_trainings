module.exports = function configure(injector) {
  injector.register('socketService', require('./socket.service'));
  injector.register('socketActions', require('./socket.actions'));
};
