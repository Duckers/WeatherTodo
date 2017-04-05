
function EditTodo() {
	return function(fabric, next) {

		function edit(todo) {
			fabric.pushRoute("editTodoPage", function (page) {

				this.todo = {
					title: todo.title,
					description: todo.description,
					preferredWeather: todo.preferredWeather
				};

				this.pageDataValid = false;

				function validatePageData() {
					if (!title || !description || !preferredWeather) {
						page.set("pageDataValid", false);
					} else {
						page.set("pageDataValid", true);
					}
				}

				var title = todo.title;
				var description = todo.description;
				var preferredWeather = todo.preferredWeather;

				this.create = function() {
					validatePageData();
				};

				this.titleChanged = function(args) {
					title = args.value;
					validatePageData();
				};

				this.descriptionChanged = function(args) {
					description = args.value;
					validatePageData();
				};

				this.preferredWeatherChanged = function(args) {
					preferredWeather = args.preferredWeather;
					validatePageData();
				};

				this.save = function(args) {
					if (todo.id === null) {
						fabric.addTodo({
							id: fabric.todos.length,
							title: title,
							description: description,
							preferredWeather: preferredWeather,
							icon: fabric.weatherTypes[preferredWeather].day,
							isDone: false
						});
					} else {
						fabric.set("todos", {id: todo.id}, "title", title);
						fabric.set("todos", {id: todo.id}, "description", description);
						fabric.set("todos", {id: todo.id}, "preferredWeather", preferredWeather);
						fabric.set("todos", {id: todo.id}, "icon", fabric.weatherTypes[preferredWeather].day);
					}
					fabric.popRoute();
				};

				this.cancel = function() {
					fabric.popRoute();
				};

				this.reset = function() {
					page.set("todo", "title", "");
					page.set("todo", "description", "");
					page.set("todo", "preferredWeather", null);
				};
			});
		}


		this.editTodo = function(arg) {
			var id = arg.data.id;

			if (id !== undefined) {
				var todo = fabric.todos.find(function (t) { return t.id === id; });
				if (todo) {
					edit(todo);
				}
			}
		};

		this.newTodo = function() {
			edit({
				id: null,
				description: "",
				title: "",
				preferredWeather: ""
			});
		};
	};
}


module.exports = EditTodo;