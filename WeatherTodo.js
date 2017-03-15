
var Fabric = require("Fabric");
var EntityCache = require("Fabric/EntityCache");

// Real fibers
var FirebaseBackend = require("WeatherTodo/FirebaseBackend");
var OpenWeatherMapBackend = require("WeatherTodo/FirebaseBackend");
var AppSchema = require("WeatherTodo/AppSchema");

// Mock fibers
var MockFirebaseBackend = require("WeatherTodo/Mock/MockFirebaseBackend");
var MockOpenWeatherMapBackend = require("WeatherTodo/Mock/MockOpenWeatherMapBackend");


module.exports = new Fabric(
	new EntityCache("weather", "todos"),
	new FirebaseBackend(),
	new OpenWeatherMapBackend(),
	//new MockFirebaseBackend(),
	//new MockOpenWeatherMapBackend()
	new AppSchema()
)

