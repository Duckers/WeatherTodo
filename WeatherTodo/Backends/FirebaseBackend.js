var FirebaseUser = require("Firebase/Authentication/User");
var FirebaseEmailAuth = require("Firebase/Authentication/Email");

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
			fabric.info('Adding todo to Firebase backend: ' + JSON.stringify(todo));
		};
		
		this.signin = function(email, password) {
			console.log("We are trying to sign in with email and password: " + email + ", " + password);
			FirebaseEmailAuth.signInWithEmailAndPassword(email, password);
			return new Promise(function(resolve){ resolve(); });
		};

		this.signup = function(email, password) {
			console.log("We are trying to sign up with email and password: " + email + ", " + password);
			return FirebaseEmailAuth.createWithEmailAndPassword(email, password).then(function(user){
				console.log("We got string back: " + user);
				FirebaseUser.getToken().then(function(result){
					console.log("TokenResult: " + result);
				}).catch(function(err){
					console.log("Error getting token: " + err);
				});
			}).catch(function(err){
				console.log("Error signin up: " + err);
			});
		};
	};
}

module.exports = FirebaseBackend;
