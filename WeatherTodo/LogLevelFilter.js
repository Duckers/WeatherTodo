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
			default:
				return false;
		}		
	}

	this.debug = function(message) {
		if (check('DEBUG')) return this.next.debug(message);		
	}

	this.info = function(message) {
		if (check('INFO')) return this.next.info(message);
	}

	this.warn = function(message) {
		if (check('WARN')) return this.next.warn(message);
	}

	this.error = function(message) {
		if (check('ERROR')) return this.next.error(message);
	}

	this.fatal = function(message) {
		if (check('FATAL')) return this.next.fatal(message);
	}
}

module.exports = LogLevelFilter;