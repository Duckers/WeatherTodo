function BackendValidators() {

	function validationFailure(argument) {
		return new Promise(function (resolve, reject) {
			reject("Argument exception: " + argument);
		});
	}

	this.weather = function(next, city) {
		if (city) {
			return next.weather(city);
		} else {
			return validationFailure('city');
		}
	}

	this.addTodo = function(next, todoData) {
		if (todoData === null || todoData === undefined) {
			return validationFailure('todoData');
		} else {
			return next.addTodo(todoData);
		}
	}

	this.todosByDescription = function(next, description) {
		if (description) {
			return next.todosByDescription(description);
		} else {
			return new Promise(function (resolve) { resolve([]); });
		}
	}
}

module.exports = BackendValidators;