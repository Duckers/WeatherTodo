
var TodoItem = new EntityClass({
	id: EntityClass.ID,
	description: "(no description)",
	isDone: Observable(false)
});


function TodoList() {

	this.mostImportantTodo = TodoItem.item;
	this.todos = TodoItem.list;
	this.todosByDescription = TodoItem.list;

	this.addTodo = function(next, data) {
		var todoGhost = TodoItem.createGhost(data);
		this.fabric.todos.add(todoGhost);
			
		return next.addTodo(data).then(function(id) {
			TodoItem.setId(todoGhost, id);
		})
	}

	this.setTodoIsDone = function(next, todoId, isDone) {
		next.setTodoIsDone(todoId, isDone);

		TodoItem.tryGet(todoId, function(todo) {
			todo.isDone.value = isDone;
		});
	}


}

