var WeatherTodo = require("WeatherTodo");
var WeatherTypes = require("WeatherTypes");

module.exports = {
	todos: WeatherTodo.todos.map(function(x) {
		WeatherTodo.debug('Mapping over: ' + JSON.stringify(x));
		x.preferredWeatherIcon = WeatherTypes[x.preferredWeather].day;
		console.log("weather icon: " + x.preferredWeatherIcon);
		return x;
	}),
	currentWeather: WeatherTodo.currentWeather,
	weatherIcon: WeatherTodo.currentWeather.map(function(x) {
		console.log("WEATHHHTHEHRHEAHERH:" + JSON.stringify(x));
		return WeatherTypes[x.weather][x.daypart];
	}),
	editTodo: function(arg) {
		console.log("Arg: " + JSON.stringify(arg));
		var id = arg.data.id;
		if (id) {
			router.push("editTodoPage", { action: "edit", id: id });
		}
	},
	newTodo: function() {
		router.push("editTodoPage", { action: "new" });
	}
};
