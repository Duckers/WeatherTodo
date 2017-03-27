

function Login() {
	return function (fabric, next) {
		this.create = function() {
			fabric.login();
		}

		this.login = function() {
			fabric.pushRoute("loginPage", function(page) {

				this.username = "";
				this.password = "";

				this.loginErrorMessage = "";
				this.user = {}

				this.login = function() {
					console.log("username: " + page.username + ", password: " + page.password);
					next.login(page.username, page.password)
						.then(function(){
							fabric.gotoRoute("todoListPage");
						})
						.catch(function() {
							page.set("loginErrorMessage", "Invalid username/password");
						});
				}

				this.signup = function(){
					next.signup(page.username, password).then(function(){
						fabric.gotoRoute("todoListPage");
					});
				}
			})
		}
	}
}

module.exports = Login;