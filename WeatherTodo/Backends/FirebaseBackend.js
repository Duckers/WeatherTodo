var FirebaseUser = require("Firebase/Authentication/User");
var FirebaseEmailAuth = require("Firebase/Authentication/Email");

function FirebaseBackend() {
	return function(fabric) {

		function firebaseFetch(resource) {
			var baseUrl = fabric.firebaseBaseUrl;
			var url = baseUrl + resource;
			fabric.info("Fetching Firebase data from: " + url);
			return fetch(url,{
				method: "GET"
			}).then(function(response){
				return response.json();
			});
		}

		function firebasePost(resource, todo) {
			var baseUrl = fabric.firebaseBaseUrl;
			var url = baseUrl + resource;
			fabric.info("Fetching Firebase data from: " + url);
			return fetch(url, {
				method: "POST",
				body: todo
			}).then(function(response){
				return response.json();
			});
		}


		this.fetchTodos = function(){
			return FirebaseUser.getToken().then(function(token){
				var uid = FirebaseUser.uid;
				return firebaseFetch("users/" + uid + "/todos.json?auth=" + encodeURIComponent(token));
			});
		};

		this.postTodo = function(){
			FirebaseUser.getToken().then(function(token){
				var uid = FirebaseUser.uid;
				return firebase("users/" + uid + "/todos.json?auth=" + encodeURIComponent(token));
			});
		};

		this.login = function(email, password) {
			fabric.debug("We are trying to sign in with email and password: " + email + ", " + password);
			return FirebaseEmailAuth.signInWithEmailAndPassword(email, password).then(function(success) {
				fabric.debug("we are now logged in");
			});
		};

		this.signup = function(email, password) {
			fabric.debug("We are trying to sign up with email and password: " + email + ", " + password);
			return FirebaseEmailAuth.createWithEmailAndPassword(email, password).then(function(success) {

			}).catch(function(err){
				fabric.debug("Error signin up: " + err);
			});
		};
	};
}

module.exports = FirebaseBackend;
