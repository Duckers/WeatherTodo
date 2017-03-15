
function MockOpenWeatherMapBackend() {
	
	this.weather = function(next, obs, city) {
		obs.value = {
			temperature: 40,
			symbol: "sunny"
		}
	}

}

module.exports = MockOpenWeatherMapBackend;