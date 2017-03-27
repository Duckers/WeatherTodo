
function EditTodo() {
	return function(fabric, next) {
		function edit(todo) {
			fabric.pushRoute("editTodoPage", function (page) {
				this.todo = todo;

				var title = todo.title;
				var description = todo.description;
				var preferredWeather = todo.preferredWeather;

				this.titleChanged = function(args) {
					title = args.value;
				};

				this.descriptionChanged = function(args) {
					description = args.value;
				};

				this.preferredWeatherChanged = function(args) {					
					preferredWeather = args.value;
					console.log('Preferred weather is: ' + preferredWeather);
				}

				this.save = function(args) {
					if (todo.id === null) {
						console.log('Pushing new todo!');
						todo.id = fabric.todos.length;
						fabric.push('todos', todo);
					}

					fabric.set("todos", {id: todo.id}, "title", title);
					fabric.set("todos", {id: todo.id}, "description", description);
					//fabric.set("todos", {id: todo.id}, "preferredWeather", preferredWeather);
				
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