var Observable = require('FuseJS/Observable');

function MockGeoLocation(behavior) {

	this.longitude = Observable();
	this.latitude = Observable();

	this.create = function() {    
    	var completionTime = 1000;

    	switch (behavior) {
    		case 'fail':
    			this.fabric.info('Mock is set to never get location');
    			break;
	    	default:
	    		this.fabric.info('Mock is generating mock location for Oslo, Norway');
		    	setTimeout(function () {	
		    		this.fabric.latitude.value = 59.91273;
		    		this.fabric.longitude.value = 10.74609;
		    		this.fabric.locationChanged(59.91273, 10.74609);
		    	}, completionTime);
    	}    	
	}

}

module.exports = MockGeoLocation;