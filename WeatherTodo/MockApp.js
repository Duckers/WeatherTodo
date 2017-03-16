function MockApp() {
    // Login to the todo-store
    this.login = function(next, username, password) {

    };

    // Signup for the todo-store
    this.signup = function(next, username, password) {

    };

    // The sorted list of todos
    this.todos = Observable();

    // Add a todo to the store
    this.addTodo = function(next, todoData) {

    };

    // Update an existing todo
    this.updateTodo = function(next, todoId, todoData) {

    };

    // Set the completed-state for a todo
    this.setIsDone = function(next, todoId, isDone) {

    };
}

module.exports = MockApp;