var Observable = require('FuseJS/Observable');

function MockGeoLocation(behavior) {

	this.longitude = Observable();
	this.latitude = Observable();
	var self = this;

	this.create = function() {
    	var completionTime = 1000;

    	switch (behavior) {
    		case 'fail':
    			this.fabric.info('Mock is set to never get location');
    			break;
	    	default:
	    		this.fabric.info('Mock is generating mock location for Oslo, Norway');
		    	setTimeout(function () { 
		    		self.fabric.latitude.value = 59.91273;
		    		self.fabric.longitude.value = 10.74609;
		    		self.fabric.locationChanged(59.91273, 10.74609);
		    	}, completionTime);
    	}    	
	}; 
}

module.exports = MockGeoLocation;
