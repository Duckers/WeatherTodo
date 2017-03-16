
var Fabric = require("Fabric");
//var EntityDiskCache = require("Fabric/EntityDiskCache");

// Real fibers
//var FirebaseBackend = require("WeatherTodo/FirebaseBackend");
//var OpenWeatherMapBackend = require("WeatherTodo/FirebaseBackend");
//var AppSchema = require("WeatherTodo/AppSchema");
//var ReleaseConfiguration = require("WeatherTodo/ReleaseConfiguration");
//var BackendValidators = require("WeatherTodo/Backend/BackendValidators");
//var LogLevelFilter = require('WeatherTodo/LogLevelFilter');
//var ConsoleLogger = require('WeatherTodo/ConsoleLogger');

// Mock fibers
//var MockFirebaseBackend = require("WeatherTodo/Mock/MockFirebaseBackend");
//var MockOpenWeatherMapBackend = require("WeatherTodo/Mock/MockOpenWeatherMapBackend");
var MockApp = require('WeatherTodo/MockApp');

module.exports = new Fabric(
	//new LogLevelFilter('ALL'),
	//new ConsoleLogger(),
	//new ReleaseConfiguration(),
	//new DiskCache("todos"),
	//new BackendValidators(),
	//new FirebaseBackend(),
	//new OpenWeatherMapBackend(),
	//new MockFirebaseBackend(),
	//new MockOpenWeatherMapBackend()
	new MockApp()
);

