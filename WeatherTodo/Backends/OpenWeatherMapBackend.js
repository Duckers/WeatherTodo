function OpenWeatherMapBackend(fabric, next) {

	var iconmap = {
		"01": "clear sky",
		"02": "few clouds",
		"03": "scattered clouds",
		"04": "broken clouds",
		"09": "shower rain",
		"10": "rain",
		"11": "thunderstorm",
		"13": "snow",
		"50": "mist"
	};

	function mapIconToWeather(icon) {
		var number = icon.substring(0, 2);
		if (number in iconmap) {
			return iconmap[number];
		} else {
			return "clear sky";
		}
	}

	function mapIconToDayOrNight(icon) {
		if (icon[2] === "d") return "day";
		else return "night";
	}

	function fetchWeatherRest(latitude, longitude) {
		// Get by latitude/longitude
		var requestString = fabric.OpenWeatherMapWeatherUrl +
			"?lat=" + arguments[0].toString() +
			"&lon=" + arguments[1].toString() +
			"&APPID=" + fabric.OpenWeatherMapApiKey;

		fabric.debug("Fetching data from: " + requestString);

		return fetch(requestString)
			.then(function (response) {
				return response.json();
			});
	}

	function fetchForecastRest(latitude, longitude) {
		var requestString = fabric.OpenWeatherMapForecastUrl +
			"?lat=" + latitude.toString() +
			"&lon=" + longitude.toString() +
			"&APPID=" + fabric.OpenWeatherMapApiKey;

		fabric.debug("Fetching data from: " + requestString);

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
		var time = new Date(data.dt * 1000);
		var ret = {
			id: city + ":" + data.dt,
			weather: mapIconToWeather(data.weather[0].icon),
			daypart: mapIconToDayOrNight(data.weather[0].icon),
			time: time
		};
		return ret;
	}

	this.fetchCurrentWeather = function(latitude, longitude) {
		fabric.debug("Fetching currentWeather");
		return fetchWeatherRest(latitude, longitude)
			.then(function (data) {
				fabric.debug("fetchCurrentWeather: Got data from API: " + JSON.stringify(data));
				var ret = mapToWeatherSchema(data);
				fabric.debug("Mapped state of current weather: " + JSON.stringify(ret));
				return ret;
			})
			.catch(function (err) {
				fabric.error(err.toString());
			});
	};

	this.fetchForecast = function(latitude, longitude) {
		fabric.debug("Fetching forecast");
		return fetchForecastRest(latitude, longitude)
			.then(function (data) {
				fabric.debug("fetchForecast: Got data from API: " + JSON.stringify(data));
				var ret = data.list.map(function (d) {
					return mapToForecastSchema(d, data.city.name);
				});
				return ret;
			});
	};
}

module.exports = OpenWeatherMapBackend;
