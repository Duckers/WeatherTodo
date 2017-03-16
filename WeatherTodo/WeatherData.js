var EntityClass = require('Fabric/EntityClass');

var Weather = new EntityClass({});

function WeatherData() {
	
	this.weatherNow = Weather.item(function (latitude, longitude) {
		return this.next.fetchWeatherNow(latitude, longitude);
	});

	this.locationChanged = function(latitude, longitude) {
		this.fabric.weatherNow.refresh(latitude, longitude);
		return this.next.locationChanged(latitude, longitude);
	};
}

module.exports = WeatherData;