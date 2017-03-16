var Fabric = require("Fabric");
//var EntityDiskCache = require("Fabric/EntityDiskCache");

// Real fibers
//var FirebaseBackend = require("WeatherTodo/FirebaseBackend");
//var OpenWeatherMapBackend = require("WeatherTodo/FirebaseBackend");
//var AppSchema = require("WeatherTodo/AppSchema");
//var ReleaseConfiguration = require("WeatherTodo/ReleaseConfiguration");
var BackendValidators = require("WeatherTodo/Backends/BackendValidators");
var LogLevelFilter = require('WeatherTodo/LogLevelFilter');
var ConsoleLogger = require('WeatherTodo/ConsoleLogger');
var OpenWeatherMapConfig = require('WeatherTodo/OpenWeatherMapConfig');
var TemperatureCalculator = require('WeatherTodo/TemperatureCalculator');

var WeatherData = require("WeatherTodo/WeatherData");

// Mock fibers
//var MockFirebaseBackend = require("WeatherTodo/Mock/MockFirebaseBackend");
var OpenWeatherMapBackend = require("WeatherTodo/Backends/OpenWeatherMapBackend");
var MockApp = require('WeatherTodo/MockApp');
var MockGeoLocation = require('WeatherTodo/Mock/MockGeoLocation');

module.exports = new Fabric(

	
	new LogLevelFilter('ALL'),
	new ConsoleLogger(),
	new MockGeoLocation(),
	new TemperatureCalculator(),
	new WeatherData(),
	new OpenWeatherMapConfig(),
 	new BackendValidators(),
 	new OpenWeatherMapBackend(),
	//new ReleaseConfiguration(),
	//new DiskCache("todos"),
	//new BackendValidators(),
	//new FirebaseBackend(),
	//new MockFirebaseBackend(),
	//new MockOpenWeatherMapBackend()
	new MockApp()
);

