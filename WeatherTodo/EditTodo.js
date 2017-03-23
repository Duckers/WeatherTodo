
function EditTodo() {
	return function(fabric, next) {

		function edit(todo) {
			fabric.pushRoute("editTodoPage", function (page) {

				this.todo = todo;

				var title;
				var description;

				this.titleChanged = function(args) {
					title = args.value;
				};

				this.descriptionChanged = function(args) {
					description = args.value;
				};

				this.save = function(args) {
					var index = fabric.todos.indexOf(function(x) { return x.id == todo.id; });
					fabric.set("todos", index, "title", title);
					fabric.set("todos", index, "description", description);

					fabric.popRoute(result);
				};
			});
		}


		this.editTodo = function(arg) {
			var id = arg.data.id.value;

			if (id) {
				edit(fabric.todos.filter(function (t) { return t.id === id; }));
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