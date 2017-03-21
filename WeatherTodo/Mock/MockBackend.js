var Observable = require("FuseJS/Observable");
var MockTodos = require("WeatherTodo/Mock/MockTodos");
var MockWeather = require("WeatherTodo/Mock/MockWeather");

function MockBackend() {

	this.fetchTodos = function() {
		return new Promise(function(resolve) {
			resolve(MockTodos);
		})
	}

	var todoEnumerator = MockTodos.length;

	this.addTodo = function(todo) {
		var id = todoEnumerator++;
		return new Promise(function(resolve) {
			MockTodos.push(todo);
			resolve(id);
		})
	}

	this.setTodoIsDone = function(todoId, isDone) {
		return new Promise(function(resolve, reject) {
			MockTodos.forEach(function (todo) {
				if (todo.id === todoId) {
					todo.isDone = isDone;
					resolve();
					return;
				}
			})
			reject("Invalid Todo ID");
		})
	}

	this.fetchCurrentWeather = function(latitude, longitude) {
		return new Promise(function(resolve) {
			resolve(MockWeather.mockCurrentWeather);
		});
	}

	this.fetchForecast = function(latitude, longitude) {
		return new Promise(function (resolve) {
			resolve(MockWeather.mockForecast);
		});
	};

}

module.exports = MockBackend;
