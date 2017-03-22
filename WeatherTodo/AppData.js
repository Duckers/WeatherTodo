function AppData() {
	return function(fabric, next) {		

		var days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		];

		this.create = function() {
			fabric.subscribe('todos', sortTodos);
			fabric.subscribe('forecast', sortTodos);

			this.refreshTodos();
		}

		var sortTodos = function (todos, forecast) {
			if (!todos || !forecast) return;

			console.log('Created combined array: ' + JSON.stringify(todos));

			var todoList = [];
			
			var todosToBeDone = todos.filter(function(t) { return t.isDone === false; });		
			var doneTodos = todos.filter(function(t) { return t.isDone === true; });
			
			var weatherTypes = {};
			todosToBeDone.forEach(function(t)  {
				if (t.preferredWeather in weatherTypes === false) {
					weatherTypes[t.preferredWeather] = [];
				}
				weatherTypes[t.preferredWeather].push(t);
			});

			// Map todos on forecast
			forecast.forEach(function(f) {
				if (f.weather in weatherTypes) {
					weatherTypes[f.weather].forEach(function (t) {
						t.fromTime = f.time;
						t.toTime = new Date(f.time.getTime() + (3 * 60 * 60 * 1000));
						t.timespan = days[t.fromTime.getDay()] + ' ' + t.fromTime.getHours() + ':00 - ' + t.toTime.getHours() + ':00';
						t.day = days[t.fromTime.getDay()];
						t.fromHour = t.fromTime.getHours() + ':00';
						t.toHour = t.toTime.getHours() + ':00';
						t.forecasted = true;
						todoList.push(t);
					});
					delete weatherTypes[f.weather];
				}
			});

			// Add remaining todos
			for (key in weatherTypes) {
				weatherTypes[key].forEach(function (t) {
					t.forecasted = false;
					todoList.push(t);
				});
			}
		
			doneTodos.forEach(function(t) { 
				t.forecasted = false;
				todoList.push(t); 
			});

			fabric.set('sortedTodos', todoList);
		};

		this.todos = [];
		this.forecast = [];
		this.sortedTodos = [];

		this.refreshCurrentWeather = function(latitude, longitude) {
			fabric.debug('Refreshing currentWeather');	
			fabric.set('currentWeather', next.fetchCurrentWeather(latitude, longitude);
		};

		this.refreshForecast = function(latitude, longitude) {
			fabric.debug('Refreshing forecast');	
			fabric.set('forecast', next.fetchForecast(latitude, longitude));
		}

		this.refreshTodos = function() {
			fabric.debug('Refreshing todos');	
			fabric.set('todos', next.fetchTodos());
		}

		this.locationChanged = function(latitude, longitude) {
			fabric.refreshCurrentWeather(latitude, longitude);
			fabric.refreshForecast(latitude, longitude);
			return next.locationChanged(latitude, longitude);
		};
	}
}

module.exports = AppData;
