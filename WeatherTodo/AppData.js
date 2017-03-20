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

	var todos = Todo.list(function() {
		this.fabric.debug('Refreshing todos');
		return this.next.fetchTodos()
			.then(function(d) { 
				console.log('TODOs: ' + JSON.stringify(d)); 
				return d;
			});
	});

	var forecast = Forecast.list(function (latitude, longitude) {
		this.fabric.debug('Refreshing forecast');
		return this.next.fetchForecast(latitude, longitude);
	});

	var sortedTodos = todos.combineArrays(forecast, function (todos, forecast) {
		console.log('Created combined array: ' + JSON.stringify(todos));
		return todos;
	});

	this.todos = todos;
	this.forecast = forecast;
	this.sortedTodos = sortedTodos;

	this.currentWeather = CurrentWeather.item(function (latitude, longitude) {
		this.fabric.debug('Refreshing currentWeather');	
		return this.next.fetchWeatherNow(latitude, longitude);
	});

	this.locationChanged = function(latitude, longitude) {
		this.fabric.currentWeather.refresh(latitude, longitude);
		this.fabric.forecast.refresh(latitude, longitude);
		return this.next.locationChanged(latitude, longitude);
	};
}

module.exports = AppData;
