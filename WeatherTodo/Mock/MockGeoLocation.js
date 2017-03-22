var Observable = require('FuseJS/Observable');

function MockGeoLocation(behavior) {
	return function(fabric) {
	
		this.create = function() {
	    	var completionTime = 1000;

	    	switch (behavior) {
	    		case 'fail':
	    			fabric.info('Mock is set to never get location');
	    			break;
		    	default:
		    		fabric.info('Mock is generating mock location for Oslo, Norway');
			    	setTimeout(function () { 			    		
			    		fabric.locationChanged(59.91273, 10.74609);
			    	}, completionTime);
	    	}    	
		}; 
	}
}

module.exports = MockGeoLocation;
