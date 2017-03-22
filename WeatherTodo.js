var Fabric = require("Fabric");


// Real fibers
var BackendValidators = require("WeatherTodo/Backends/BackendValidators");
var LogLevelFilter = require('WeatherTodo/LogLevelFilter');
var ConsoleLogger = require('WeatherTodo/ConsoleLogger');
var OpenWeatherMapConfig = require('WeatherTodo/OpenWeatherMapConfig');
var OpenWeatherMapBackend = require("WeatherTodo/Backends/OpenWeatherMapBackend");
var FirebaseBackendConfig = require("WeatherTodo/FirebaseBackendConfig");
var FirebaseBackend = require("WeatherTodo/Backends/FirebaseBackend");
var TemperatureCalculator = require('WeatherTodo/TemperatureCalculator');
var ErrorHandling = require('WeatherTodo/ErrorHandling');

// Data model
var AppData = require("WeatherTodo/AppData");

// Mocks
var MockApp = require('WeatherTodo/MockApp');
var MockBackend = require('WeatherTodo/Mock/MockBackend');
var MockGeoLocation = require('WeatherTodo/Mock/MockGeoLocation');

// Development fibers
var InspectApi = require('WeatherTodo/InspectApi');

module.exports = new Fabric(
	// Instrumentation
	new InspectApi('currentWeather', 'forecast', 'todos'),

	new ErrorHandling(),

	// Config
 	new OpenWeatherMapConfig(),
	new FirebaseBackendConfig(),

	// Logging
	new LogLevelFilter('ALL'),
	new ConsoleLogger({ trimLongLines: 120 }),

	// Data model
	new AppData(),

	// Helper methods
	new TemperatureCalculator(),

	// Backend
 	new BackendValidators(),

 	// Actual implementations of backends
 	new FirebaseBackend(),
 	new OpenWeatherMapBackend(),

 	// MockBackend
	new MockBackend(),

	// Mock
	new MockApp(),
	new MockGeoLocation('Oslo')
);
