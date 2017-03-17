var Observable = require("FuseJS/Observable");

var title = Observable();
var description = Observable();

var preferredWeather = Observable();

preferredWeather.onValueChanged(module, function(item){
	console.log("Selected: " + item);
});

module.exports = {
	title: title,
	description: description,
	preferredWeather: preferredWeather
};
