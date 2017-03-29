var Observable = require("FuseJS/Observable");

function Login() {
	return function (fabric, next) {
		this.create = function() {
			fabric.login();
		};

		this.signin = function() {
			console.log("username: " + fabric.username + ", password: " + password);
			next.login(fabric.username, password).then(function(){
				router.goto("todoListPage");
			});
		};

		this.signup = function(){
			console.log("trying to sign up with: " + fabric.username + ", " + password);
			next.signup(fabric.username, password).then(function(loggedIn){
				if (loggedIn === true){
					router.goto("todoListPage");
				}
			});
		};
	};
}

module.exports = Login;
