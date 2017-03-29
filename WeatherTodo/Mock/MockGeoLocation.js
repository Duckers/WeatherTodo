function MockGeoLocation(location) {

	var locations = {
		Oslo: { latitude: 59.91273, longitude: 10.74609 }
	};

	return function (fabric) {

		this.create = function () {
			var completionTime = 600;

			switch (location) {
				case "fail":
					fabric.info("Mock is set to never get location");
					break;
				default:
					fabric.info("Mock is generating mock location for " + location);
					if (location in locations) {
						setTimeout(function () {
							fabric.locationChanged(locations[location].latitude, locations[location].longitude);
						}, completionTime);
					} else {
						fabric.error("Unknown location: " + location);
					}
			}
		};
	};
}

module.exports = MockGeoLocation;
