var Observable = require('FuseJS/Observable');

function MockApp() {
    this.welcome = "Hello, dude";

    // Login to the todo-store
    this.login = function(username, password) {
		console.log("Logging in with: " + username + ", and " + password);
    };

    // Signup for the todo-store
    this.signup = function(username, password) {
		console.log("Signing up with: " + username + ", and " + password);
    };

    // The sorted list of todos
    this.todos = Observable({
           "description": "This is todo item 1",
           "id": 0,
           "isDone": false,
           "preferredWeather": "sunny",
           "title": "Todo item 1"
         },
         {
           "description": "This is todo item 2",
           "id": 1,
           "isDone": true,
           "preferredWeather": "raining",
           "title": "Todo item 2"
         },
         {
           "description": "This is todo item 3",
           "id": 2,
           "isDone": false,
           "preferredWeather": "sunny",
           "title": "Todo item 3"
         },
         {
           "description": "This is todo item 4",
           "id": 3,
           "isDone": false,
           "preferredWeather": "cloudy",
           "title": "Todo item 4"
         },
         {
           "description": "This is todo item 5",
           "id": 4,
           "isDone": true,
           "preferredWeather": "snowing",
           "title": "Todo item 5"
         });

    // Add a todo to the store
    this.addTodo = function(todoData) {
		
    };

    // Update an existing todo
    this.updateTodo = function(todoId, todoData) {

    };

    // Set the completed-state for a todo
    this.setIsDone = function(todoId, isDone) {

    };

	// The current weather in city
	this.weatherNow = Observable("sunny");

	// 5 days of forecast for weather in city
	this.forecast = Observable(
		"sunny",
		"snowy",
		"foggy",
		"sunny",
		"sunny"
	);
}

module.exports = MockApp;
