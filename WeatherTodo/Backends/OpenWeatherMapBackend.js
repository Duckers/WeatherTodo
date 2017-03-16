function OpenWeatherMapBackend() {

	this.weather = function(next, city) {
		var requestString = this.fabric.OpenWeatherMapUrl + '/' +
			city + '&APPID=' + this.fabric.OpenWeatherMapApiKey;

		return fetch(requestString)
			.then(function (response) { return response.json(); });		
	}
	
}

module.exports = OpenWeatherMapBackend;