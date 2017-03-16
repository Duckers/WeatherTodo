var Observable = require("FuseJS/Observable");

var WeatherTodo = require("WeatherTodo");

var username = Observable();
var password = Observable();


function login(){
	WeatherTodo.login(username.value, password.value).then(function(){
		router.goto("todoListPage");
	});
}

function signup(){
	WeatherTodo.signup(username.value, password.value).then(function(){
		router.goto("todoListPage");
	});
}

module.exports = {
	username: username,
	password: password,
	login: login,
	signup: signup
};
