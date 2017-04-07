function Todos(fabric, next) {

	this.todos = [];

	this.setTodos = function (todos) {
		fabric.set("todos", todos.map(function (todo) {
			todo.icon = fabric.weatherTypes[todo.preferredWeather].day;
			return todo;
		}));
	};

	this.addTodo = function (todo) {
		fabric.push("todos", todo);
		return next.addTodo(todo);
	};

	this.refreshTodos = function () {
		fabric.fetchTodos()
			.then(fabric.setTodos);
	};

	this.init = function () {
		fabric.refreshTodos();
	};

	this.setTodoIsDone = function (args) {
		var todo = fabric.todos.find(function (t) { return t.id === args.data.id; });
		if (todo && todo.isDone !== args.value) {
			fabric.set("todos", { id: todo.id }, "isDone", args.value);
		}
	};
}

module.exports = Todos;
