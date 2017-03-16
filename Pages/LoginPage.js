var Observable = require("FuseJS/Observable");

var WeatherTodo = require("WeatherTodo");

var username = Observable();
var password = Observable();


function login(){	
	WeatherTodo.login(username.value, password.value);
}

function signup(){
	WeatherTodo.signup(username.value, password.value);
}

module.exports = {
	username: username,
	password: password,
	login: login,
	signup: signup
};
