function OpenWeatherMapBackend() {

	this.weatherNow = function() {

		if (arguments.length === 2) {
			// Get by longitude/latitude
			var requestString = this.fabric.OpenWeatherMapUrl + 
				'?lat=' + arguments[0].toString() + 
				'&lon=' + arguments[1].toString() + 
				'&APPID=' + this.fabric.OpenWeatherMapApiKey;

			this.fabric.debug('Fetching data from: ' + requestString);

			return fetch(requestString)
				.then(function (response) { return response.json(); });		

		} else if (arguments.length === 1) {
			this.fabric.currentCity.value = arguments[0];

			// Get by city
			var requestString = this.fabric.OpenWeatherMapUrl + 
				'?q=' + arguments[0] + 
				'&APPID=' + this.fabric.OpenWeatherMapApiKey;

			this.fabric.debug('Fetching data from: ' + requestString);

			return fetch(requestString)
				.then(function (response) { return response.json(); });		
		}
	}

	this.locationChanged = function(latitude, longitude) {
		this.fabric.weatherNow.refresh(latitude, longitude);
		return this.next.locationChanged(latitude, longitude);
	}
}

module.exports = OpenWeatherMapBackend;