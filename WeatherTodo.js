var Fabric = require("Fabric");

// Backends
var BackendValidators = require("WeatherTodo/Backends/BackendValidators");
var OpenWeatherMapConfig = require('WeatherTodo/Backends/OpenWeatherMapConfig');
var OpenWeatherMapBackend = require("WeatherTodo/Backends/OpenWeatherMapBackend");
var FirebaseBackendConfig = require("WeatherTodo/Backends/FirebaseBackendConfig");
var FirebaseBackend = require("WeatherTodo/Backends/FirebaseBackend");

// Logging & error handling
var LogLevelFilter = require('WeatherTodo/LogLevelFilter');
var ConsoleLogger = require('WeatherTodo/ConsoleLogger');
var ErrorHandling = require('WeatherTodo/ErrorHandling');

// Data & business logic
var Todos = require('WeatherTodo/Todos');
var Weather = require("WeatherTodo/Weather");

// Mocks
var MockApp = require('WeatherTodo/MockApp');
var MockBackend = require('WeatherTodo/Mock/MockBackend');
var MockGeoLocation = require('WeatherTodo/Mock/MockGeoLocation');


module.exports = new Fabric(
	
	new ErrorHandling(),

	// Config
 	new OpenWeatherMapConfig(),
	new FirebaseBackendConfig(),

	// Logging
	new LogLevelFilter('ERROR'),
	new ConsoleLogger({ trimLongLines: 120 }),

	// App model
	new Weather(),
	new Todos(),

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
