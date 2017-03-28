function Weather() {
	return function(fabric, next) {
		
		this.forecast = [];

		this.setForecast = function(f) {
			fabric.set("forecast", f);
		}

		this.refreshForecast = function(latitude, longitude) {
			fabric.fetchForecast(latitude, longitude)
				.then(fabric.setForecast);
		};

		this.currentWeather = {};

		this.setCurrentWeather = function(w) {
			w.icon = fabric.weatherTypes[w.weather][w.daypart];
			fabric.set('currentWeather', w);
		}

		this.weatherTypes = {
			"clear sky" : { day: "DaySunny", night: "NightClear" },
			"clouds" : { day: "DayCloudy", night: "NightAltCloudy" },
			"few clouds" : { day: "DayCloudy", night: "NightAltCloudy" },
			"scattered clouds" : { day: "Cloudy", night: "Cloud" },
			"broken clouds" : { day: "Cloudy", night: "Cloudy" },
			"shower rain" : { day: "DayShowers", night: "NightShowers" },
			"rain" : { day: "Rain", night: "Rain" },
			"thunderstorm" : { day: "DayThunderstorm", night : "NightThunderstorm" },
			"snow" : { day: "DaySnow", night : "NightSnow" },
			"mist" : { day: "DayFog", night: "NightFog" }
		}

		this.refreshCurrentWeather = function(latitude, longitude) {
			fabric.fetchCurrentWeather(latitude, longitude)
				.then(fabric.setCurrentWeather);
		};

		this.locationChanged = function(latitude, longitude) {
			fabric.refreshCurrentWeather(latitude, longitude);
			fabric.refreshForecast(latitude, longitude);
			return next.locationChanged(latitude, longitude);
		};

	}
}

module.exports = Weather;