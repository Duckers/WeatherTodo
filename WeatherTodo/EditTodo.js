
function EditTodo() {
	return function(fabric, next) {

		function edit(todo) {
			fabric.pushRoute("editTodoPage", function (page) {

				this.foobar = "THIS IS FOOBAR";
				this.todo = todo;

				var title = todo.title;
				var description = todo.description;

				this.titleChanged = function(args) {
					title = args.value;
				};

				this.descriptionChanged = function(args) {
					description = args.value;
				};

				this.preferredWeatherChanged = function(args) {
					console.log('Preferred weather changed: ' + args.preferredWeather);
					fabric.set("todos", {id: todo.id}, "preferredWeather", args.preferredWeather);
				}

				this.save = function(args) {
					fabric.set("todos", {id: todo.id}, "title", title);
					fabric.set("todos", {id: todo.id}, "description", description);
					fabric.popRoute();
				};
			});
		}


		this.editTodo = function(arg) {			
			var id = arg.data.id.value;

			if (id !== undefined) {				
				var todo = fabric.todos.find(function (t) { return t.id === id; });
				if (todo) {
					edit(todo);
				}
			}
		};

		this.newTodo = function() {
			edit({
				id : null,
				description: "Enter description"
			})
		};
	}
}


module.exports = EditTodo;