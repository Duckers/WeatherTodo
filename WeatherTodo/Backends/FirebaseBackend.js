function FirebaseBackend() {
	return function(fabric) {

		function firebase(resource) {
			var baseUrl = fabric.firebaseBaseUrl;
			var url = baseUrl + resource + ".json";
			fabric.info("Fetching Firebase data from: " + url);
			return fetch(url)
				.then(function(response){
					return response.json();
				});
		}

		this.fetchTodos = function() {
			return firebase("todos");
		};

		this.addTodo = function(todo) {
			fabric.info("Adding todo to Firebase backend: " + JSON.stringify(todo));
		};
	};
}

module.exports = FirebaseBackend;
