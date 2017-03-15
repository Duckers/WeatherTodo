
function Weather() {
	
	this.weatherInOsloRightNow = Observable(0);
	
	this.create = function () {
		// set up some streaming
		this.weatherInOsloRightNow.value = newValue; 
	}
}

module.exports = Weather;