function BackendValidators() {

	function validationFailure(argument) {
		return new Promise(function (resolve, reject) {
			reject("Argument exception: " + argument);
		});
	}

	this.fetchWeatherNow = function(latitude, longitude) {
		if (latitude && longitude)
			return this.next.fetchWeatherNow(latitude, longitude);
	}

	this.fetchForecast = function(latitude, longitude) {
		if (latitude && longitude)
			return this.next.fetchForecast(latitude, longitude);
	}

	this.addTodo = function(todoData) {
		if (todoData === null || todoData === undefined) {
			return validationFailure('todoData');
		} else {
			return this.next.addTodo(todoData);
		}
	}

	this.todosByDescription = function(description) {
		if (description) {
			return this.next.todosByDescription(description);
		} else {
			return new Promise(function (resolve) { resolve([]); });
		}
	}
}

module.exports = BackendValidators;