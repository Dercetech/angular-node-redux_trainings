module.exports = function configure(injector) {
  injector.register('logger', require('./logger'));
};
