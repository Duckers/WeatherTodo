var Observable = require('FuseJS/Observable');

function InspectApi() {

	var self = this;
	var args = arguments;
	//var apiPoints = [];
	//for (var i = 0; i < arguments.length; i++) {
	//	apiPoints.push(arguments[i]);
	//}	

	this.create = function() {
		for (var i = 0; i < args.length; i++) {	
			var point = args[i];
			var m = self.fabric[point];				
			if (m instanceof Observable) {
				m.onValueChanged(module, function (item) {
					self.fabric.debug(point + ' onValueChanged: ' + JSON.stringify(item));
				});				
			}
		}
	}

}

module.exports = InspectApi;