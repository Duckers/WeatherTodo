var Observable = require("FuseJS/Observable");
var GeoLocation = require("FuseJS/GeoLocation");

function GeoLocation() {

	this.longitude = Observable();
	this.latitude = Observable();

	this.create = function() {    
    	var timeoutMs = 5000;

    	GeoLocation.getLocation(timeoutMs).then(function(location) {        
    		this.fabric.latitude.value = location.latitude;
    		this.fabric.longitude.value = location.longitude;
        	this.fabric.locationChanged(location.latitude, location.longitude);
    	}).catch(function(fail) {
    		this.fabric.error(fail);    
	    });
	}

}

module.exports = GeoLocation;