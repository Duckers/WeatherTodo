

function Login() {
	return function (fabric, next) {

		this.username = "";
		var password = "";

		this.loginErrorMessage = "";

		this.usernameChanged = function(args) {
			fabric.set("username", args.value);
			fabric.set("loginErrorMessage", "");
		}

		this.passwordChanged = function(args) {
			password = args.value;
			fabric.set("loginErrorMessage", "");
		}

		this.user = {}

		this.login = function() {
			console.log("username: " + fabric.username + ", password: " + password);
			next.login(fabric.username, password)
				.then(function(){
					fabric.gotoRoute("todoListPage");
				})
				.catch(function() {
					fabric.set("loginErrorMessage", "Invalid username/password");
				});
		}

		this.signup = function(){
			next.signup(fabric.username, password).then(function(){
				fabric.gotoRoute("todoListPage");
			});
		}
	}
}

module.exports = Login;