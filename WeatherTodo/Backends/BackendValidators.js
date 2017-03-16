function BackendValidators() {

	function validationFailure(argument) {
		return new Promise(function (resolve, reject) {
			reject("Argument exception: " + argument);
		});
	}

	this.weather = function(city) {
		if (city) {
			return this.next.weather(city);
		} else {
			return validationFailure('city');
		}
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