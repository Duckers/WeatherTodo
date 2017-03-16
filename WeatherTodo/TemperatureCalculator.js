function TemperatureCalculator() {

	this.fahrenheitToCelcius = function(fahrenheit) {
		return (5 / 9) * (fahrenheit - 32);
	}
	
}

module.exports = TemperatureCalculator;