var Observable = require("FuseJS/Observable");

function Login(fabric, next) {
	this.create = function() {
		fabric.login();
	};

	this.username = "kristian@fusetools.com";
	this.password = "foobar";

	var self = this;

	this.login = function() {
		console.log("username: " + self.username + ", password: " + self.password);
		next.login(self.username, self.password).then(function() {
			fabric.gotoRoute("todoListPage");
		})
		.catch(function() {
			page.set("loginErrorMessage", "Invalid username/password");
		});
	};

	this.signup = function() {
		console.log("trying to sign up with: " + self.username + ", " + self.password);
		next.signup(self.username, self.password).then(function(loggedIn) {
			if (loggedIn === true) {
				fabric.gotoRoute("todoListPage");
			}
		});
	};
}

module.exports = Login;
