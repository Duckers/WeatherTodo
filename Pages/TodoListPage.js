var WeatherTodo = require("WeatherTodo");

var weathers = {
	"clear sky" : { day: "DaySunny", night: "NightClear" },
	"clouds" : { day: "DayCloudy", night: "NightAltCloudy" },
	"few clouds" : { day: "DayCloudy", night: "NightAltCloudy" },
	"scattered clouds" : { day: "Cloudy", night: "Cloud" },
	"broken clouds" : { day: "Cloudy", night: "Cloudy" },
	"shower rain" : { day: "DayShowers", night: "NightShowers" },
	"rain" : { day: "Rain", night: "Rain" },
	"thunderstorm" : { day: "DayThunderstorm", night : "NightThunderstorm" },
	"snow" : { day: "DaySnow", night : "NightSnow" },
	"mist" : { day: "DayFog", night: "NightFog" }
};

module.exports = {
	todos: WeatherTodo.todos.map(function(x) {
		WeatherTodo.debug('Mapping over: ' + JSON.stringify(x));
		x.preferredWeatherIcon = weathers[x.preferredWeather].day;
		console.log("weather icon: " + x.preferredWeatherIcon);
		return x;
	}),
	weatherNow: WeatherTodo.weatherNow,
	weatherIcon: WeatherTodo.weatherNow.map(function(x){
		console.log("WEATHHHTHEHRHEAHERH:" + JSON.stringify(x));
		return weathers[x.weather][x.daypart];
	}),
	newTodo: function(){
		router.push("editTodoPage");
	}
};
