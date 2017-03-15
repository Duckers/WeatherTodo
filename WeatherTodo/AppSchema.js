
var Schema = require("Fabric/Schema");

function AppSchema() {

	this.weather = Schema.entity("Returns the weather for a given city",
		"city", String, "The city for which to fetch the weather");

	this.todos = Schema.entity("Returns the list of todos");

	this.setIsDone = Schema.method("Sets whether or not a todo item is done",
		"id", String, "The ID of the todo",
		"isDone", Boolean, "Whether or not the todo item is done");

}

module.exports = AppSchema;