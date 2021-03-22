"use strict";

var map = null;
var infowindow = null;
var markers = [];

var GOOGLE_MAPS_API_KEY = "AIzaSyBnZtv1xAxEgTHcme4vJTF2SBU0f06FmqQ";

var src = "https://geo.data.gov.sg/ewaste/2021/02/19/kml/ewaste.kml";

// Defaults to centre of Singapore
var defaultPosition = {
  coords: {
    latitude: 43.672278,
    longitude: -79.3745125,
  },
};

// Switches to E-Waste data after user clicks on E-waste button
function eWaste() {
  src = "https://geo.data.gov.sg/ewaste/2021/02/19/kml/ewaste.kml";
  console.log("Switched to E-Waste data!");
  initMap();
}

// Switches to Cash-For-Trash data after user clicks on Cash-For-Trash button
function cashForTrash() {
  src = "https://geo.data.gov.sg/cashfortrash/2019/02/27/kml/cashfortrash.kml";
  console.log("Switched to Cash-For-Trash data!");
  initMap();
}

// Initialises Google Map
function initMap() {
  // Get user's location
  var x = navigator.geolocation;
  x.getCurrentPosition(success, failure);

  function success(position) {
    console.log("\n\n\nLoaded Successfully!");

    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;

    var coords = new google.maps.LatLng(userLat, userLong);

    var mapOptions = {
      zoom: 14,
      center: coords,
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Adds all the markers from data.gov
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: false,
      preserveViewport: true,
      map: map,
    });

    kmlLayer.addListener('click', function(kmlEvent) {
      // Access the description of each marker
      var text = kmlEvent.featureData.description;

      // Tags to be queried
      const BUILDING = "<th>ADDRESSBUILDINGNAME</th>"
      const BLOCK = "<th>ADDRESSBLOCKHOUSENUMBER</th>"

      // Index of Location Name
      const startIndex = text.search(BUILDING);
      const endIndex = text.search(BLOCK);
      var address = text.slice(startIndex+32, endIndex-27);
      console.log(address);
    });
  }

  // If map fails to load
  function failure() {
    console.log("\n\n\nFailed to load!");
  }
}
