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

	var doneTodos = todos.filter(function (t) { return t.isDone === true; });

	var notDoneTodos = todos.filter(function (t) { return t.isDone === false });

	var forecast = Forecast.list(function (latitude, longitude) {
		this.fabric.debug('Refreshing forecast');
		return this.next.fetchForecast(latitude, longitude);
	});

	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	// 
	var sortedTodos = todos.combineArrays(forecast, function (todos, forecast) {
		console.log('Created combined array: ' + JSON.stringify(todos));

		var todoList = [];

		// Map todos to:
		// 1. Incomplete todos
		var todosToBeDone = todos.filter(function(t) { return t.isDone === false; });

		// 2. Done todos
		var doneTodos = todos.filter(function(t) { return t.isDone === true; });

		// 3. Map incomplete todos to their corresponding weather
		var weatherTypes = {};

		todosToBeDone.forEach(function(t)  {
			if (t.preferredWeather in weatherTypes === false) {
				weatherTypes[t.preferredWeather] = [];
			}
			weatherTypes[t.preferredWeather].push(t);
		});

		// Map todos on forecast
		forecast.forEach(function(f) {
			//console.log(JSON.stringify(f));
			if (f.weather in weatherTypes) {
				weatherTypes[f.weather].forEach(function (t) {
					t.fromTime = f.time;
					t.toTime = new Date(f.time.getTime() + (3 * 60 * 60 * 1000));
					t.timespan = days[t.fromTime.getDay()] + ' ' + t.fromTime.getHours() + ':00 - ' + t.toTime.getHours() + ':00';
					t.day = days[t.fromTime.getDay()];
					t.fromHour = t.fromTime.getHours() + ':00';
					t.toHour = t.toTime.getHours() + ':00';
					t.forecasted = true;
					todoList.push(t);
				});
				delete weatherTypes[f.weather];
			}
		});

		// Add remaining todos
		for (key in weatherTypes) {
			weatherTypes[key].forEach(function (t) {
				t.forecasted = false;
				todoList.push(t);
			});
		}

		//todosToBeDone.forEach(function(t) { todoList.push(t); });
		doneTodos.forEach(function(t) { 
			t.forecasted = false;
			todoList.push(t); 
		});

		return todoList;
	});

	this.todos = todos;
	this.forecast = forecast;
	this.sortedTodos = sortedTodos;

	this.getTodo = Todo.get;

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
