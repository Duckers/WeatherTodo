function LogLevelFilter(logLevel) {
	return function(fabric, next) {
		if (logLevel) {
			this.logLevel = logLevel;
		} else {
			this.logLevel = fabric.LogLevel;
		}

		function check(level) {
			switch (logLevel) {
				case 'OFF':
					return false;
				case 'ALL':
				case 'DEBUG':
					return true;
				case 'INFO':
					if (level === 'INFO' 
						|| level === 'WARN'
						|| level === 'ERROR'
						|| level === 'FATAL') return true;
					else return false;
				case 'WARN':
					if (level === 'WARN'
						|| level === 'ERROR'
						|| level === 'FATAL') return true;
					else return false;
				case 'ERROR':
					if (level === 'ERROR'
						|| level === 'FATAL') return true;
				case 'FATAL':
					if (level === 'FATAL') return true;
					else return false;
				default:
					return false;
			}		
		}

		this.debug = function(message) {
			if (check('DEBUG')) return next.debug(message);		
		}

		this.info = function(message) {
			if (check('INFO')) return next.info(message);
		}

		this.warn = function(message) {
			if (check('WARN')) return next.warn(message);
		}

		this.error = function(message) {
			if (check('ERROR')) return next.error(message);
		}

		this.fatal = function(message) {
			if (check('FATAL')) return next.fatal(message);
		}
	}
}

module.exports = LogLevelFilter;