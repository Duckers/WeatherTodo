function LogLevelFilter(logLevel) {
	if (logLevel) {
		this.logLevel = logLevel;
	} else {
		this.logLevel = this.fabric.LogLevel;
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
		}		
	}

	this.debug = function(next, message) {
		if (check('DEBUG')) return next.debug(message);		
	}

	this.info = function(next, message) {
		if (check('INFO')) return next.info(message);
	}

	this.warn = function(next, message) {
		if (check('WARN')) return next.warn(message);
	}

	this.error = function(next, message) {
		if (check('ERROR')) return next.error(message);
	}

	this.fatal = function(next, message) {
		if (check('FATAL')) return next.fatal(message);
	}
}

module.exports = LogLevelFilter;