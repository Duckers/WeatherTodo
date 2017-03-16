function OpenWeatherMapBackend() {

	var self = this;

	function fetchWeatherRest(latitude, longitude) {

		// Get by latitude/longitude
		var requestString = self.fabric.OpenWeatherMapWeatherUrl + 
			'?lat=' + arguments[0].toString() + 
			'&lon=' + arguments[1].toString() + 
			'&APPID=' + self.fabric.OpenWeatherMapApiKey;

		self.fabric.debug('Fetching data from: ' + requestString);

		return fetch(requestString)
			.then(function (response) { 
				return response.json(); 
			});
	}

	function fetchForecastRest(latitude, longitude) {
		var requestString = self.fabric.OpenWeatherMapForecastUrl + 
			'?lat=' + arguments[0].toString() + 
			'&lon=' + arguments[1].toString() + 
			'&APPID=' + self.fabric.OpenWeatherMapApiKey;

		self.fabric.debug('Fetching data from: ' + requestString);

		return fetch(requestString)
			.then(function (response) { 
				return response.json(); 
			});
	}

	function mapToWeatherSchema(data) {
		return {
			city: data.name,
			weather: data.weather[0].description,
		};
	}

	function mapToForecastSchema(data) {
		return {
			weather: data.weather.description,
			time: new Date(data.dt * 1000)
		};
	}
	

	this.fetchWeatherNow = function(latitude, longitude) {

		fetchWeatherRest(latitude, longitude)			
			.then(function (data) {
				this.fabric.debug('Got data from API: ' + JSON.stringify(data));				
				return mapToWeatherSchema(data);
			});		

	}

	this.fetchForecast = function(latitude, longitude) {
		fetchForecastRest(latitude, longitude)
			.then(function (data) {
				this.fabric.debug('Got data from API: ' + JSON.stringify(data));
				this.fabric.currentCity = data.name;
				return data.list.map(mapToForecastSchema);
			});		
	}


	
}

module.exports = OpenWeatherMapBackend;