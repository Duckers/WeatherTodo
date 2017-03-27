debugger;
var Fabric = require("Fabric");
var Store = require("Fabric/Store");
var RouterController = require("Fabric/RouterController");

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
var Login = require("WeatherTodo/Login");
var Todos = require("WeatherTodo/Todos");
var EditTodo = require("WeatherTodo/EditTodo");
var Weather = require("WeatherTodo/Weather");

// Mocks
var MockApp = require('WeatherTodo/MockApp');
var MockBackend = require('WeatherTodo/Mock/MockBackend');
var MockGeoLocation = require('WeatherTodo/Mock/MockGeoLocation');

var ObservableAdapter = require("Fabric/ObservableAdapter");

module.exports = new ObservableAdapter(new Fabric(
	new ErrorHandling(),

	// Config
 	new OpenWeatherMapConfig(),
	new FirebaseBackendConfig(),

	// Logging
	new LogLevelFilter('ERROR'),
	new ConsoleLogger({ trimLongLines: 120 }),

	// Routing
	new RouterController(router),

	// App model
	new Login(),
	new Weather(),
	new EditTodo(),
	new Todos(),

	// Backend
 	new BackendValidators(),

 	// Actual implementations of backends
 	new FirebaseBackend(),
 	new OpenWeatherMapBackend(),

	// Mock
	new MockBackend(),
	new MockApp(),
	new MockGeoLocation('Oslo'),

	// Data store
	new Store()
));
