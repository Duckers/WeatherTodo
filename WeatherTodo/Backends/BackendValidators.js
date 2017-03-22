function BackendValidators() {
	return function(fabric, next) {
		function validationFailure(argument) {
			return new Promise(function (resolve, reject) {
				reject("Argument exception: " + argument);
			});
		}

		this.fetchCurrentWeather = function(latitude, longitude) {
			if (latitude && longitude)
				return next.fetchCurrentWeather(latitude, longitude);
		}

		this.fetchForecast = function(latitude, longitude) {
			if (latitude && longitude)
				return next.fetchForecast(latitude, longitude);
		}

		this.addTodo = function(todoData) {
			if (todoData === null || todoData === undefined) {
				return validationFailure('todoData');
			} else {
				return next.addTodo(todoData);
			}
		}
	}
}

module.exports = BackendValidators;