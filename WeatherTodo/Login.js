var Observable = require("FuseJS/Observable");

function Login(fabric, next) {

	this.gotoLogin = function () {
		fabric.gotoRoute("loginPage", "loginPageViewModel");
		debugger;
	};

	this.loginPageViewModel = function (page) {
		var self = this;

		this.username = "kristian@fusetools.com";
		this.password = "foobar";

		this.init = function () {
			fabric.info("Creating login viewmodel");
		};

		this.login = function () {
			console.log("username: " + self.username + ", password: " + self.password);
			next.login(self.username, self.password).then(function () {
				fabric.gotoRoute("todoListPage");
			})
			.catch(function () {
				page.set("loginErrorMessage", "Invalid username/password");
			});
		};

		this.signup = function () {
			console.log("trying to sign up with: " + self.username + ", " + self.password);
			next.signup(self.username, self.password).then(function (loggedIn) {
				if (loggedIn === true) {
					fabric.info("Signup successful");
					fabric.gotoRoute("todoListPage");
				} else {
					fabric.info("Signup unsuccessful");
					fabric.gotoRoute("todoListPage");
				}
			});
		};
	};

}

module.exports = Login;
