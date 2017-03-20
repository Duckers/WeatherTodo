var Observable = require("FuseJS/Observable");
var WeatherTodo = require("WeatherTodo");

var title = Observable();
var description = Observable();

var preferredWeather = Observable();


//TODO(check that we don't get into trouble with undefined)
//var currentTodo = this.Parameter.map(WeatherTodo.getTodo).inner();

var currentTodo = this.Parameter.map(WeatherTodo.getTodo);

preferredWeather.onValueChanged(module, function(item){
	console.log("Selected: " + item);
});

module.exports = {
	title: title,
	description: description,
	preferredWeather: preferredWeather
};
