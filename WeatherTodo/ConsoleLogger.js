function ConsoleLogger() {

	this.debug = function(next, message) {
		console.log('[DEBUG]: ' + message);
		next.debug(message);
	}

	this.info = function(next, message) {
		console.log('[INFO]:  ' + message);
		next.debug(message);
	}

	this.warn = function(next, message) {
		console.log('[WARN]:  ' + message);
		next.warn(message);
	}

	this.error = function(next, message) {
		console.log('[ERROR]: ' + message);
		next.error(message);
	}

	this.fatal = function(next, message) {
		console.log('[FATAL]: ' + message);
		next.fatal(message);
	}

}

module.exports = ConsoleLogger;