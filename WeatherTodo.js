debugger;
var Fabric = require("Fabric");
var RouterController = require("Fabric/RouterController");

// Backends
var BackendValidators = require("WeatherTodo/Backends/BackendValidators");
var OpenWeatherMapConfig = require('WeatherTodo/Backends/OpenWeatherMapConfig');
var OpenWeatherMapBackend = require("WeatherTodo/Backends/OpenWeatherMapBackend");
var FirebaseBackendConfig = require("WeatherTodo/Backends/FirebaseBackendConfig");
var FirebaseBackend = require("WeatherTodo/Backends/FirebaseBackend");

// Logging & error handling
var LogLevelFilter = require('WeatherTodo/Infrastructure/Logging/LogLevelFilter');
var ConsoleLogger = require('WeatherTodo/Infrastructure/Logging/ConsoleLogger');
var ErrorHandling = require('WeatherTodo/Infrastructure/ErrorHandling');

// Data & business logic
var Login = require("WeatherTodo/Login");
var Todos = require("WeatherTodo/Todos");
var EditTodo = require("WeatherTodo/EditTodo");
var Weather = require("WeatherTodo/Weather");

// Mocks
var MockApp = require('WeatherTodo/Mock/MockApp');
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

	new RouterController(router),

	// App model
	new Login(),
	new Weather(),
	new EditTodo(router),
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
	new MockGeoLocation('Oslo'),
);
