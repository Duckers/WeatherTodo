function FirebaseBackend() {
	var self = this;
	
	function firebase(resource){
		var baseUrl = self.fabric.firebaseBaseUrl;
		var url = baseUrl + resource + ".json";
		self.fabric.info("Fetching Firebase data from: " + url);
		return fetch(url)
			.then(function(response){
				return response.json();
			});
	}

	this.fetchTodos = function(){
		return firebase("todos");
	};
	
}

module.exports = FirebaseBackend;
