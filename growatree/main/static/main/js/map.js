"use strict";

var map = null;
var infowindow = null;
var markers = [];

var GOOGLE_MAPS_API_KEY = "AIzaSyBnZtv1xAxEgTHcme4vJTF2SBU0f06FmqQ";

var src = "https://geo.data.gov.sg/ewaste/2021/02/19/kml/ewaste.kml";
var cash_for_trash_src =
  "https://geo.data.gov.sg/cashfortrash/2019/02/27/kml/cashfortrash.kml";

// Defaults to centre of Singapore
var defaultPosition = {
  coords: {
    latitude: 43.672278,
    longitude: -79.3745125,
  },
};

function initMap() {
  // Get user's location
  var x = navigator.geolocation;
  x.getCurrentPosition(success, failure);

  function success(position) {
    console.log("\n\n\nLoaded Successfully!")

    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;

    var coords = new google.maps.LatLng(userLat, userLong);

    var mapOptions = {
      zoom: 12,
      center: coords,
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Adds all the markers from data.gov
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      // preserveViewport: false,
      map: map,
    });

    // Listens when the user clicks on the marker
    kmlLayer.addListener("click", function (kmlEvent) {
      var text = kmlEvent.featureData.description;
      showInContentWindow(text);
    });

    function showInContentWindow(text) {
      var sidediv = document.getElementById("content-window");
      sidediv.innerHTML = text;
    }
  }

  function failure() {console.log("\n\n\nFailed to load!")}
}
