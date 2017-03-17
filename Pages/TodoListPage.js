var WeatherTodo = require("WeatherTodo");

var weathers = {
	"clear sky" : { day: "DaySunny", night: "NightClear" },
	"few clouds" : { day: "DayCloudy", night: "NightAltCloudy" },
	"scattered clouds" : { day: "Clouds", night: "Clouds" },
	"broken clouds" : { day: "Cloudy", night: "Cloudy" },
	"shower rain" : { day: "DayShowers", night: "NightShowers" },
	"rain" : { day: "Rain", night: "Rain" },
	"thunderstorm" : { day: "DayThunderstorm", night : "NightThunderstorm" },
	"snow" : { day: "DaySnow", night : "NightSnow" },
	"mist" : { day: "DayFog", night: "NightFog" }
};

console.log("WeatherNow: " + WeatherTodo.weatherNow);

module.exports = {
	todos: WeatherTodo.todos.map(function(x) {
		WeatherTodo.debug('Mapping over: ' + JSON.stringify(x));
		x.preferredWeatherIcon = weathers[x.preferredWeather].day;
		console.log("weather icon: " + x.preferredWeatherIcon);
		return x;
	}),
	weatherNow: WeatherTodo.weatherNow,
	weatherIcon: WeatherTodo.weatherNow.map(function(x){
		return weathers[x].day;
	}),
	newTodo: function(){
		router.push("editTodoPage");
	}
};
