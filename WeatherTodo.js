var Fabric = require("Fabric");

// Real fibers
var BackendValidators = require("WeatherTodo/Backends/BackendValidators");
var LogLevelFilter = require('WeatherTodo/LogLevelFilter');
var ConsoleLogger = require('WeatherTodo/ConsoleLogger');
var OpenWeatherMapConfig = require('WeatherTodo/OpenWeatherMapConfig');
var OpenWeatherMapBackend = require("WeatherTodo/Backends/OpenWeatherMapBackend");
var FirebaseBackend = require("WeatherTodo/Backends/FirebaseBackend");
var TemperatureCalculator = require('WeatherTodo/TemperatureCalculator');

// Data model
var WeatherData = require("WeatherTodo/WeatherData");

// Mocks
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
 	new FirebaseBackend(),
 	new OpenWeatherMapBackend(),

	// Mock
	new MockApp(),
	new MockGeoLocation('succeed')
);
