var Observable = require('FuseJS/Observable');

function MockApp() {
	return function (fabric, next) {

		// Login to the todo-store
		this.login = function (username, password) {
			fabric.debug("Logging in with: " + username + ", and " + password);
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					if (username === 'user' && password === 'pass') {
						resolve();
					}
					else {
						reject();
					}
				}, 150);
			});
		};

		// Signup for the todo-store
		this.signup = function (username, password) {
			fabric.debug("Signing up with: " + username + ", and " + password);
			return new Promise(function (resolve) {
				setTimeout(function () {
					resolve();
				}, 1000);
			});
		};

		// The sorted list of todos
		this.todos = Observable({
			"description": "This is todo item 1",
			"id": 0,
			"isDone": false,
			"preferredWeather": "clear sky",
			"title": "Todo item 1"
		},
			{
				"description": "This is todo item 2",
				"id": 1,
				"isDone": true,
				"preferredWeather": "broken clouds",
				"title": "Todo item 2"
			},
			{
				"description": "This is todo item 3",
				"id": 2,
				"isDone": false,
				"preferredWeather": "rain",
				"title": "Todo item 3"
			},
			{
				"description": "This is todo item 4",
				"id": 3,
				"isDone": false,
				"preferredWeather": "snow",
				"title": "Todo item 4"
			},
			{
				"description": "This is todo item 5",
				"id": 4,
				"isDone": true,
				"preferredWeather": "mist",
				"title": "Todo item 5"
			});

		// Add a todo to the store
		this.addTodo = function (todoData) {

		};

		// Update an existing todo
		this.updateTodo = function (todoId, todoData) {

		};

		// Set the completed-state for a todo
		this.setIsDone = function (todoId, isDone) {

		};

		this.currentCity = Observable('');

		// The current weather in city
		this.currentWeather = Observable({ weather: "broken clouds" });
	};
}

module.exports = MockApp;