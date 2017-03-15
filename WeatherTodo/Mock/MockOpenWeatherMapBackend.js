
function MockOpenWeatherMapBackend() {
	
	this.weather = function(next, obs, city) {
		obs.addAll(
			[
				from: "2017-03-03T06:00:00",
				to: "2017-03-03T09:00:00",
				temperature: 40,
				weather: "sunny"
			],
			[
				from: "2017-03-03T09:00:00",
				to: "2017-03-03T12:00:00",
				temperature: 12,
				weather: "raining"	
			]
		});
		return obs;
	}

}

module.exports = MockOpenWeatherMapBackend;