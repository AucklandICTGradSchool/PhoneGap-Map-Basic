function initialize() {
	this.bindEvents();	
}

// Bind Event Listeners
//
// Bind any events that are required on startup. Common events are:
// 'load', 'deviceready', 'offline', and 'online'.
function bindEvents() {
	document.addEventListener('deviceready', this.onDeviceReady, false);
}

// Update DOM on a Received Event
function receivedEvent(id) {
	var parentElement = document.getElementById(id);
	var listeningElement = parentElement.querySelector('.listening');
	var receivedElement = parentElement.querySelector('.received');

	listeningElement.setAttribute('style', 'display:none;');
	receivedElement.setAttribute('style', 'display:block;');

	console.log('Received Event: ' + id);

}

function resizeMap() {
	var message_height = $('#deviceready').height();
	
	var map_height = Math.max(100,$(window).height()-message_height);
	var map_width  = Math.max(100,$(window).width());
	
	console.log("resizeMap() map dimensions = (" + map_width + "," + map_height + ")");
	$("#map-canvas").width(map_width + "px");
	$("#map-canvas").height(map_height + "px");
}


function initializeMap() {
	app.resizeMap();

	var start_lat  = -37.7886;
	var start_long =  175.317;

	// Create and store Leaflet map
	this._map = L.map('map-canvas').setView([start_lat,start_long], 16);
	var map = this._map;

	// On line map
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 16
	}).addTo(map);

	var marker_popup = L.popup()
		.setContent("<b>The University of Waikato</b><br />Established 1964.");
		
	// Marker location within Uni
	var marker = L.marker([start_lat, start_long])
		.addTo(map)
		.bindPopup(marker_popup);
}


function MapApplication() {
	var thisAppObject = this; // current instance of App
	
	this.initialize = initialize;
	this.bindEvents = bindEvents;
	
	// deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
	
	// http://stackoverflow.com/questions/1081499/accessing-an-objects-property-from-an-event-listener-call-in-javascript
	this.onDeviceReady = function() {
		thisAppObject.receivedEvent('deviceready');		
		thisAppObject.initializeMap();
		
	}; //onDeviceReady end
    
	this.receivedEvent = receivedEvent;
	
	this.resizeMap = resizeMap;
	this.initializeMap = initializeMap;
}

// Application Constructor
var app = new MapApplication();

$(window).resize(function() {
    app.resizeMap();
});



