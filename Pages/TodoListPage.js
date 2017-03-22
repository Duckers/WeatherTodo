var WeatherTodo = require("WeatherTodo");

module.exports = {
	editTodo: function(arg) {
		var id = arg.data.id;
		if (id) {
			router.push("editTodoPage", { action: "edit", id: id });
		}
	},
	newTodo: function() {
		router.push("editTodoPage", { action: "new" });
	}
};
