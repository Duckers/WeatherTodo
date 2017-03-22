

function Login(router) {
	return function (fabric, next) {

		var username = "";
		var password = "";

		this.usernameChanged = function(args) {
			fabric.set("username", args.value);
		}

		this.passwordChanged = function(args) {
			password = args.value;
		}

		this.login = function() {
			fabric.login(fabric.username, password).then(function(){
				router.goto("todoListPage");
			});
		}

		this.signup = function(){
			fabric.signup(fabric.username, password).then(function(){
				router.goto("todoListPage");
			});
		}
	}
}

module.exports = Login;