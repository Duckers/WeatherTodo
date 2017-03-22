function FirebaseBackend() {
	return function(fabric) {		
		
		function firebase(resource){
			var baseUrl = fabric.firebaseBaseUrl;
			var url = baseUrl + resource + ".json";
			fabric.info("Fetching Firebase data from: " + url);
			return fetch(url)
				.then(function(response){
					return response.json();
				});
		}

		this.fetchTodos = function(){
			return firebase("todos");
		};
	}
}

module.exports = FirebaseBackend;
