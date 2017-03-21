	
var mockForecast = [
	{"id":"Oslo:1490108400","weather":"scattered clouds","daypart":"day",  "time":new Date("2017-03-21T15:00:00.000Z")},
	{"id":"Oslo:1490119200","weather":"rain","daypart":"night",            "time":new Date("2017-03-21T18:00:00.000Z")},
	{"id":"Oslo:1490130000","weather":"few clouds","daypart":"night",      "time":new Date("2017-03-21T21:00:00.000Z")},
	{"id":"Oslo:1490140800","weather":"few clouds","daypart":"night",      "time":new Date("2017-03-22T00:00:00.000Z")},
	{"id":"Oslo:1490151600","weather":"few clouds","daypart":"night",      "time":new Date("2017-03-22T03:00:00.000Z")},
	{"id":"Oslo:1490162400","weather":"few clouds","daypart":"day",        "time":new Date("2017-03-22T06:00:00.000Z")},
	{"id":"Oslo:1490173200","weather":"few clouds","daypart":"day",        "time":new Date("2017-03-22T09:00:00.000Z")},
	{"id":"Oslo:1490184000","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-22T12:00:00.000Z")},
	{"id":"Oslo:1490194800","weather":"scattered clouds","daypart":"day",  "time":new Date("2017-03-22T15:00:00.000Z")},
	{"id":"Oslo:1490205600","weather":"rain","daypart":"night",            "time":new Date("2017-03-22T18:00:00.000Z")},
	{"id":"Oslo:1490216400","weather":"rain","daypart":"night",            "time":new Date("2017-03-22T21:00:00.000Z")},
	{"id":"Oslo:1490227200","weather":"rain","daypart":"night",            "time":new Date("2017-03-23T00:00:00.000Z")},
	{"id":"Oslo:1490238000","weather":"rain","daypart":"night",            "time":new Date("2017-03-23T03:00:00.000Z")},
	{"id":"Oslo:1490248800","weather":"snow","daypart":"day",              "time":new Date("2017-03-23T06:00:00.000Z")},
	{"id":"Oslo:1490259600","weather":"snow","daypart":"day",              "time":new Date("2017-03-23T09:00:00.000Z")},
	{"id":"Oslo:1490270400","weather":"snow","daypart":"day",              "time":new Date("2017-03-23T12:00:00.000Z")},
	{"id":"Oslo:1490281200","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-23T15:00:00.000Z")},
	{"id":"Oslo:1490292000","weather":"broken clouds","daypart":"night",   "time":new Date("2017-03-23T18:00:00.000Z")},
	{"id":"Oslo:1490302800","weather":"clear sky","daypart":"night",       "time":new Date("2017-03-23T21:00:00.000Z")},
	{"id":"Oslo:1490313600","weather":"snow","daypart":"night",            "time":new Date("2017-03-24T00:00:00.000Z")},
	{"id":"Oslo:1490324400","weather":"broken clouds","daypart":"night",   "time":new Date("2017-03-24T03:00:00.000Z")},
	{"id":"Oslo:1490335200","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-24T06:00:00.000Z")},
	{"id":"Oslo:1490346000","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-24T09:00:00.000Z")},
	{"id":"Oslo:1490356800","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-24T12:00:00.000Z")},
	{"id":"Oslo:1490367600","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-24T15:00:00.000Z")},
	{"id":"Oslo:1490378400","weather":"scattered clouds","daypart":"night","time":new Date("2017-03-24T18:00:00.000Z")},
	{"id":"Oslo:1490389200","weather":"clear sky","daypart":"night",       "time":new Date("2017-03-24T21:00:00.000Z")},
	{"id":"Oslo:1490400000","weather":"few clouds","daypart":"night",      "time":new Date("2017-03-25T00:00:00.000Z")},
	{"id":"Oslo:1490410800","weather":"few clouds","daypart":"night",      "time":new Date("2017-03-25T03:00:00.000Z")},
	{"id":"Oslo:1490421600","weather":"few clouds","daypart":"day",        "time":new Date("2017-03-25T06:00:00.000Z")},
	{"id":"Oslo:1490432400","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-25T09:00:00.000Z")},
	{"id":"Oslo:1490443200","weather":"few clouds","daypart":"day",        "time":new Date("2017-03-25T12:00:00.000Z")},
	{"id":"Oslo:1490454000","weather":"clear sky","daypart":"day",         "time":new Date("2017-03-25T15:00:00.000Z")},
	{"id":"Oslo:1490464800","weather":"clear sky","daypart":"night",       "time":new Date("2017-03-25T18:00:00.000Z")},
	{"id":"Oslo:1490475600","weather":"rain","daypart":"night",            "time":new Date("2017-03-25T21:00:00.000Z")}	
];

var mockCurrentWeather = {"city":"Oslo","weather":"scattered clouds","daypart":"day"};

module.exports = {
	mockCurrentWeather: mockCurrentWeather,
	mockForecast: mockForecast
};