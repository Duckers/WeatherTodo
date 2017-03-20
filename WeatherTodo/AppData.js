var EntityClass = require('Fabric/EntityClass');

var CurrentWeather = new EntityClass({});
var Forecast = new EntityClass({});

var Todo = new EntityClass({
	title: "Default title",
	description: "Default description",
	preferredWeather: "rain",
	isDone: false
});

function AppData() {
	
	var self = this;

	this.todos = Todo.list(function(){
		self.fabric.debug('Refreshing todos');
		return self.next.fetchTodos();
	});

	this.currentWeather = CurrentWeather.item(function (latitude, longitude) {
		self.fabric.debug('Refreshing currentWeather');	
		return self.next.fetchWeatherNow(latitude, longitude);
	});

	this.forecast = Forecast.list(function (latitude, longitude) {
		self.fabric.debug('Refreshing forecast');
		return this.next.fetchForecast(latitude, longitude);
	});

	this.locationChanged = function(latitude, longitude) {
		this.fabric.currentWeather.refresh(latitude, longitude);
		this.fabric.forecast.refresh(latitude, longitude);
		return this.next.locationChanged(latitude, longitude);
	};
}

module.exports = AppData;
