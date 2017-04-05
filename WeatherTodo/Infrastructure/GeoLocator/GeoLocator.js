var GeoLocation = require("FuseJS/GeoLocation");

function GeoLocator() {
	return function (fabric, next) {

		this.create = function () {
			var timeoutMs = 5000;

			GeoLocation.getLocation(timeoutMs).then(function (location) {
				fabric.locationChanged(location.latitude, location.longitude);
			}).catch(function (fail) {
				fabric.error(fail);
			});
		};

		// This implementation is present to ensure that something
		// is available on the fabric to handle locationChanged events.
		// This can be omitted if you want an error to be thrown if
		// there is no listener on the fabric.
		this.locationChanged = function (latitude, longitude) {
			return next.locationChanged(latitude, longitude);
		};
	};

}

module.exports = GeoLocator;