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
			next.fetchCurrentWeather(latitude, longitude)
				.then(function (currentWeatherData)
				{
					fabric.set('currentWeather', currentWeatherData);	
				});			
		};

		this.refreshForecast = function(latitude, longitude) {
			fabric.debug('Refreshing forecast');	
			next.fetchForecast(latitude, longitude)
				.then(function (forecast) {
					fabric.set('forecast', forecast);
				});			
		};

		this.refreshTodos = function() {
			fabric.debug('Refreshing todos');	
			next.fetchTodos()
				.then(function (todos) {
					fabric.set('todos', todos);
				});			
		};

	}
}

module.exports = AppData;
