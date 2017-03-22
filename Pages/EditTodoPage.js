var Observable = require("FuseJS/Observable");
var WeatherTodo = require("WeatherTodo");

var title = Observable();
var description = Observable();

var preferredWeather = Observable();

preferredWeather.onValueChanged(module, function(item){
	console.log("Selected: " + item);
});

//TODO(check that we don't get into trouble with undefined)
//var currentTodo = this.Parameter.map(WeatherTodo.getTodo).inner();

var currentTodo = this.Parameter.map(function(param) {
	console.log("Parm: " + JSON.stringify(param));
	if (param.action === "edit") {
		var ret = WeatherTodo.getTodo(param.id);
		console.log("Ret: " + JSON.stringify(ret));
		return ret;
	} else if (param.action === "new") {
		return {
			title: Observable(""),
			description: Observable(""),
			preferredWeather: Observable("")
		};
	} else {
		throw new Error("Unrecognized action");
	}
});

module.exports = {
	currentTodo: currentTodo
};

