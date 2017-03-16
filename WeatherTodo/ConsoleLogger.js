function ConsoleLogger() {

	this.debug = function(message) {
		console.log('[DEBUG]: ' + message);
		this.next.debug(message);
	}

	this.info = function(message) {
		console.log('[INFO]:  ' + message);
		this.next.debug(message);
	}

	this.warn = function(message) {
		console.log('[WARN]:  ' + message);
		this.next.warn(message);
	}

	this.error = function(message) {
		console.log('[ERROR]: ' + message);
		this.next.error(message);
	}

	this.fatal = function(message) {
		console.log('[FATAL]: ' + message);
		this.next.fatal(message);
	}

}

module.exports = ConsoleLogger;