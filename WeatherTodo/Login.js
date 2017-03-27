
var Observable = require("FuseJS/Observable");

function Login() {
	return function (fabric, next) {
		this.create = function() {
			fabric.login();
		}

		this.login = function() {
			fabric.pushRoute("loginPage", function(page) {

				this.username = Observable("");
				this.password = Observable("");

				this.loginErrorMessage = "";
				this.user = {}

				this.login = function() {
					console.log("username: " + page.username.value + ", password: " + page.password.value);
					next.login(page.username.value, page.password.value)
						.then(function(){
							fabric.gotoRoute("todoListPage");
						})
						.catch(function() {
							page.set("loginErrorMessage", "Invalid username/password");
						});
				}

				this.signup = function(){
					next.signup(page.username, page.password).then(function(){
						fabric.gotoRoute("todoListPage");
					});
				}
			})
		}
	}
}

module.exports = Login;