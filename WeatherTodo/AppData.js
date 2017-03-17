var EntityClass = require('Fabric/EntityClass');

var Weather = new EntityClass({});
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
		return this.next.fetchTodos().catch(function(e){
			console.log("error: " + e);
		});
	});

	this.weatherNow = Weather.item(function (latitude, longitude) {
		self.fabric.debug('Refreshing weatherNow');
		console.log("fetching weathernow appdata");
		console.dir(this.next);
		var promise = self.next.fetchWeatherNow(latitude, longitude);
		if (promise){
			return promise.then(function(x){
				console.log("GOT WEATHER: " + x);
				return x;
			});
		}
	});

	this.forecast = Weather.list(function (latitude, longitude) {
		self.fabric.debug('Refreshing forecast');
		return this.next.fetchForecast(latitude, longitude);
	});

	this.locationChanged = function(latitude, longitude) {
		this.fabric.weatherNow.refresh(latitude, longitude);
		this.fabric.forecast.refresh(latitude, longitude);
		return this.next.locationChanged(latitude, longitude);
	};
}

module.exports = AppData;
