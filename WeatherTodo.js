debugger;

var Fabric = require("Fabric");
var RouterController = require("Fabric/RouterController");

// Initialization
var AppInit = require("WeatherTodo/AppInit");

// Backends
var BackendValidators = require("WeatherTodo/Backends/BackendValidators");
var OpenWeatherMapConfig = require("WeatherTodo/Backends/OpenWeatherMapConfig");
var OpenWeatherMapBackend = require("WeatherTodo/Backends/OpenWeatherMapBackend");
var FirebaseBackendConfig = require("WeatherTodo/Backends/FirebaseBackendConfig");
var FirebaseBackend = require("WeatherTodo/Backends/FirebaseBackend");

// Logging & error handling
var LogLevelFilter = require("WeatherTodo/Infrastructure/Logging/LogLevelFilter");
var ConsoleLogger = require("WeatherTodo/Infrastructure/Logging/ConsoleLogger");
var ErrorHandling = require("WeatherTodo/Infrastructure/ErrorHandling");

// Data & business logic
var Login = require("WeatherTodo/Login");
var Todos = require("WeatherTodo/Todos");
var EditTodo = require("WeatherTodo/EditTodo");
var Weather = require("WeatherTodo/Weather");
var SortedTodos = require("WeatherTodo/SortedTodos");

// Phone
var GeoLocator = require("WeatherTodo/Infrastructure/GeoLocator/GeoLocator");

// Mocks
var MockApp = require("WeatherTodo/Mock/MockApp");
var MockBackend = require("WeatherTodo/Mock/MockBackend");
var MockGeoLocation = require("WeatherTodo/Mock/MockGeoLocation");

module.exports = new Fabric(
	AppInit,
	ErrorHandling,

	// Config
	OpenWeatherMapConfig,
	FirebaseBackendConfig,

	// Logging
	LogLevelFilter("DEBUG"),
	ConsoleLogger({ trimLongLines: 120 }),

	// Routing
	RouterController(router),

	// App model
	Login,
	Weather,
	EditTodo,
	Todos,
	SortedTodos,

	// GeoLocation
	GeoLocator,

	// Backend
	BackendValidators,

	// Actual implementations of backends
	FirebaseBackend,
	OpenWeatherMapBackend,

	// MockBackend
	MockBackend,

	// Mock
	MockApp,
	MockGeoLocation("Oslo")
);
