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

// Development fibers
var InspectApi = require('WeatherTodo/InspectApi');

module.exports = new Fabric(
	// Instrumentation
	new InspectApi('weatherNow', 'forecast', 'todos'),

	// Config
 	new OpenWeatherMapConfig(),
	
	// Logging
	new LogLevelFilter('ALL'),
	new ConsoleLogger({ trimLongLines: 120 }),
	
	// Data model
	new WeatherData(),
	
	// Helper methods
	new TemperatureCalculator(),

	// Backend
 	new BackendValidators(),
 	new OpenWeatherMapBackend(),

	// Mock
	new MockApp(),
	new MockGeoLocation(),
);


//new ReleaseConfiguration(),
//new DiskCache("todos"),
//new BackendValidators(),
//new FirebaseBackend(),
//new MockFirebaseBackend(),
//new MockOpenWeatherMapBackend()

