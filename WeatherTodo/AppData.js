function AppData() {
	return function(fabric, next) {		
		

		this.create = function() {
			fabric.subscribe('todos', fabric.sortTodos);
			fabric.subscribe('forecast', fabric.sortTodos);

			this.refreshTodos();
		}

		this.todos = [];
		this.forecast = [];
		this.sortedTodos = [];
		this.currentWeather = { 'weather' : 'clear sky'};

		this.refreshCurrentWeather = function(latitude, longitude) {
			fabric.debug('Refreshing currentWeather');	
			fabric.set('currentWeather', next.fetchCurrentWeather(latitude, longitude));
		};

		this.refreshForecast = function(latitude, longitude) {
			fabric.debug('Refreshing forecast');	
			fabric.set('forecast', next.fetchForecast(latitude, longitude));
		}

		this.refreshTodos = function() {
			fabric.debug('Refreshing todos');	
			fabric.set('todos', next.fetchTodos());
		}

	}
}

module.exports = AppData;
