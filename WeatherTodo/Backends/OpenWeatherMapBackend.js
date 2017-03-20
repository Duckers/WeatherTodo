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
		if (icon[2] === 'd') return 'day';
		else return 'night';
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
				return response.json(); 				
			});		
	}

	function fetchForecastRest(latitude, longitude) {
		var requestString = self.fabric.OpenWeatherMapForecastUrl + 
			'?lat=' + latitude.toString() + 
			'&lon=' + longitude.toString() + 
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
			weather: mapIconToWeather(data.weather[0].icon),
			daypart: mapIconToDayOrNight(data.weather[0].icon)
		};
	}

	function mapToForecastSchema(data, city) {
		//console.log('Mapping: ' + JSON.stringify(data));
		var timestamp = new Date(data.dt * 1000);
		var ret = {
			id: city + ":" + data.dt,
			weather: mapIconToWeather(data.weather[0].icon),
			daypart: mapIconToDayOrNight(data.weather[0].icon),
			time: timestamp
		};
		console.log('MAPPED: ' + JSON.stringify(ret));
		return ret;
	}

	this.fetchWeatherNow = function(latitude, longitude) {
		self.fabric.debug('Fetching currentWeather');
		return fetchWeatherRest(latitude, longitude)
			.then(function (data) {
				self.fabric.debug('WeatherNow: Got data from API: ' + JSON.stringify(data));
				var ret = mapToWeatherSchema(data);
				return ret;
			})
			.catch(function (err) {
				self.fabric.error(err.toString());
			});		
	}

	this.fetchForecast = function(latitude, longitude) {		
		self.fabric.debug('Fetching forecast');
		return fetchForecastRest(latitude, longitude)
			.then(function (data) {
				self.fabric.debug('WeatherNow: Got data from API: ' + JSON.stringify(data));
				console.log(JSON.stringify(data));
				var ret = data.list.map(function (d) {
					return mapToForecastSchema(d, data.city.name);				
				});
				return ret;
			});		
	}

}

module.exports = OpenWeatherMapBackend;
