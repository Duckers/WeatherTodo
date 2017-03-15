
var Schema = require("Fabric/Schema");

function AppSchema() {

	this.weather = Schema.entity("Returns the weather for a given city",
		"city", String, "The city for which to fetch the weather");

	this.todos = Schema.entity("Returns the list of todos");

	this.setIsDone = Schema.method("Sets whether or not a todo item is done",
		"id", String, "The ID of the todo",
		"isDone", Boolean, "Whether or not the todo item is done");

	this.addTodo = Schema.method("Adds a todo to the todolist",
		"title", String, "The title of the TODO item",
		"description", String, "What am I supposed to do, exactly?",
		"preferredWeather", String, "Under which weather conditions would I rather do this?");
}

module.exports = AppSchema;