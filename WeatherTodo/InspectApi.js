var Observable = require('FuseJS/Observable');

function InspectApi() {
	var args = Array.prototype.slice.call(arguments);

	return function(fabric, next) {
		
		function createListener(symbol) {		
			var m = fabric[symbol];				
			if (m instanceof Observable) {
				m.onValueChanged(module, function (item) {
					fabric.debug(symbol + ' onValueChanged: ' + JSON.stringify(item));
				});				
			}
		}

		this.create = function() {
			for (var i = 0; i < args.length; i++) {	
				createListener(args[i]);
			}
		}
	}

}

module.exports = InspectApi;