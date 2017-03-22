function FirebaseBackendConfig() {
	return function() {
		this.firebaseBaseUrl = "https://weathertodo.firebaseio.com/";
	}
}

module.exports = FirebaseBackendConfig;
