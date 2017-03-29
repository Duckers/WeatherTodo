function ConsoleLogger(config) {
	return function(fabric, next) {

		var trimLongLines;

		if (config !== undefined) {
			trimLongLines = config.trimLongLines;
		}

		function trim(message) {
			if (typeof message !== 'string') {
				message = message.toString();
			}
			if (trimLongLines) {
				var ellipsis = '';
				if (message.length > trimLongLines) {
					ellipsis = '(...)';
				}
				return message.substring(0, trimLongLines) + ellipsis;
			} else return message;
		}

		this.debug = function(message) {
			message = trim(message);
			console.log('[DEBUG]: ' + message);
			next.debug(message);
		};

		this.info = function(message) {
			message = trim(message);
			console.log('[INFO]:  ' + message);
			next.debug(message);
		};

		this.warn = function(message) {
			message = trim(message);
			console.log('[WARN]:  ' + message);
			next.warn(message);
		};

		this.error = function(message) {
			message = trim(message);
			console.log('[ERROR]: ' + message);
			next.error(message);
		};

		this.fatal = function(message) {
			message = trim(message);
			console.log('[FATAL]: ' + message);
			next.fatal(message);
		};
	};

}

module.exports = ConsoleLogger;