var Observable = require("FuseJS/Observable");

function Login() {
	return function (fabric, next) {
		this.create = function() {
			fabric.login();
		};

		this.username = "kristian@fusetools.com";
		this.password = "foobar";

		var self = this;

		this.signin = function() {
			console.log("username: " + self.username + ", password: " + self.password);
			next.login(self.username, self.password).then(function(){
				router.goto("todoListPage");
			});
		};

		this.signup = function(){
			console.log("trying to sign up with: " + self.username + ", " + self.password);
			next.signup(self.username, self.password).then(function(loggedIn){
				if (loggedIn === true){
					router.goto("todoListPage");
				}
			});
		};
	};
}

module.exports = Login;
