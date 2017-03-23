

function Login(router) {
	return function (fabric, next) {

		this.username = "";
		var password = "";

		this.usernameChanged = function(args) {
			fabric.set("username", args.value);
		}

		this.passwordChanged = function(args) {
			password = args.value;
		}

		this.login = function() {
			console.log("username: " + fabric.username + ", password: " + password);
			fabric.set('user', 'longlivedToken', 'a mock token');
			next.login(fabric.username, password).then(function(){
				router.goto("todoListPage");
			});
		}

		this.signup = function(){
			next.signup(fabric.username, password).then(function(){
				router.goto("todoListPage");
			});
		}
	}
}

module.exports = Login;