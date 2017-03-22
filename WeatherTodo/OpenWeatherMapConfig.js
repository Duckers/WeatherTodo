function OpenWeatherMapConfig() {
	return function() {
		this.OpenWeatherMapWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
		this.OpenWeatherMapForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';
		this.OpenWeatherMapApiKey = '0a743a318c32002c6248839dcbefd5d8';
	};
}

module.exports = OpenWeatherMapConfig;