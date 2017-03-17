function ConsoleLogger(config) {

	var trimLongLines = undefined;

	if (config !== undefined) {
		trimLongLines = config['trimLongLines'];
	}

	function trim(message) {
		if (trimLongLines) {
			var continuation = '';
			if (message.length > trimLongLines) {
				continuation = '(...)';
			}
			return message.substring(0, trimLongLines) + continuation;
		} else return message;
	}

	this.debug = function(message) {
		message = trim(message);
		console.log('[DEBUG]: ' + message);
		this.next.debug(message);
	}

	this.info = function(message) {
		message = trim(message);
		console.log('[INFO]:  ' + message);
		this.next.debug(message);
	}

	this.warn = function(message) {
		message = trim(message);
		console.log('[WARN]:  ' + message);
		this.next.warn(message);
	}

	this.error = function(message) {
		message = trim(message);
		console.log('[ERROR]: ' + message);
		this.next.error(message);
	}

	this.fatal = function(message) {
		message = trim(message);
		console.log('[FATAL]: ' + message);
		this.next.fatal(message);
	}

}

module.exports = ConsoleLogger;