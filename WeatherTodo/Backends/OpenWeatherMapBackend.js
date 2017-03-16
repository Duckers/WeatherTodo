function OpenWeatherMapBackend() {

	var self = this;

	var iconmap = {
		'01': 'clear sky',
		'02': 'few clouds',
		'03': 'scattered clouds',
		'04': 'broken clouds',
		'09': 'shower rain',
		'10': 'rain',
		'11': 'thunderstorm',
		'13': 'snow',
		'50': 'mist'
	};

	function mapIconToWeather(icon) {
		var number = icon.substring(0, 2);
		if (number in iconmap) {
			return iconmap[number];
		} else {
			return 'clear sky';
		}
	}

	function mapIconToDayOrNight(icon) {
		if (icon[2] === 'd') return 'Day';
		else return 'Night';
	}

	function fetchWeatherRest(latitude, longitude) {

		// Get by latitude/longitude
		var requestString = self.fabric.OpenWeatherMapWeatherUrl + 
			'?lat=' + arguments[0].toString() + 
			'&lon=' + arguments[1].toString() + 
			'&APPID=' + self.fabric.OpenWeatherMapApiKey;

		self.fabric.debug('Fetching data from: ' + requestString);

		return fetch(requestString)
			.then(function (response) { 
				self.fabric.debug('Got response: ' + JSON.stringify(response));
				self.fabric.debug('Body: ' + response._bodyInit);
				return response.json(); 				
			})
			.then(function (data) {
				this.fabric.debug('HASSELKNIPPE, WHY THIS NO GET CALLED?? Got data from API: ' + JSON.stringify(data));				
				return mapToWeatherSchema(data);
			})
			.catch(function (err) {
				this.fabric.error(err.toString());
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

		return fetchWeatherRest(latitude, longitude)			
			.then(function (data) {
				this.fabric.debug('Got data from API: ' + JSON.stringify(data));				
				return mapToWeatherSchema(data);
			})
			.catch(function (err) {
				this.fabric.error(err.toString());
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