var Observable = require("FuseJS/Observable");

function MockFirebaseBackend() {
	var myObs = null;
	
	this.todos = function(next, obs) {
		myObs = obs;
		myObs.addAll([
			{
				id: 0,
				title: "Todo item 1",
				description: "This is todo item 1",
				preferredWeather: "sunny",
				isDone: Observable(false)
			},{
				id: 1,
				title: "Todo item 2",
				description: "This is todo item 2",
				preferredWeather: "raining",
				isDone: Observable(true)
			},{
				id: 2,
				title: "Todo item 3",
				description: "This is todo item 3",
				preferredWeather: "sunny",
				isDone: Observable(false)
			},{
				id: 3,
				title: "Todo item 4",
				description: "This is todo item 4",
				preferredWeather: "cloudy",
				isDone: Observable(false)
			},{
				id: 4,
				title: "Todo item 5",
				description: "This is todo item 5",
				preferredWeather: "snowing",
				isDone: Observable(true)
			}			  
		]);
		return myObs;
	};

	this.addTodo = function(next, todo) {
		myObs.add(todo);
	};

	this.setIsDone = function(next, id) {
		myObs.forEach(function(i){
			if (i.id === id) {
				i.isDone.value = true;
			}
		});
	};
}

module.exports = MockFirebaseBackend;
