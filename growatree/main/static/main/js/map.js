"use strict";

var map = null;
var infowindow = null;
var markers = [];
var mapState = "ewaste";

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
  mapState = "ewaste";
}

// Switches to Cash-For-Trash data after user clicks on Cash-For-Trash button
function cashForTrash() {
  src = "https://geo.data.gov.sg/cashfortrash/2019/02/27/kml/cashfortrash.kml";
  console.log("Switched to Cash-For-Trash data!");
  initMap();
  mapState = "cashfortrash";
}

function lightingWaste() {
  src = "https://geo.data.gov.sg/lighting/2019/10/01/kml/lighting.kml";
  console.log("Switched to Lighting-Waste data!");
  initMap();
  mapState = "lightingwaste";
}

function secondHandGoods() {
  src =
    "https://geo.data.gov.sg/secondhandcollecn/2017/11/30/kml/secondhandcollecn.kml";
  console.log("Switched to Second Hand Goods data!");
  initMap();
  mapState = "secondhandgoods";
}

// Initialises Google Map
function initMap() {
  // Get user's location
  var x = navigator.geolocation;
  x.getCurrentPosition(success, failure);

  function success(position) {
    console.log("Loaded Successfully!");

    var userLat = position.coords.latitude;
    var userLong = position.coords.longitude;

    var coords = new google.maps.LatLng(userLat, userLong);

    var mapOptions = {
      zoom: 14,
      center: coords,
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Add user's location as a marker
    const image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const userMarker = new google.maps.Marker({
      position: { lat: userLat, lng: userLong },
      map,
      icon: image,
    });

    // Adds all the markers from data.gov
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: false,
      preserveViewport: true,
      map: map,
    });

    kmlLayer.addListener("click", function (kmlEvent) {
      // Access the description of each marker
      var text = kmlEvent.featureData.description;

      // Tags to be queried
      const BUILDING = "<th>ADDRESSBUILDINGNAME</th>";
      const BLOCK = "<th>ADDRESSBLOCKHOUSENUMBER</th>";
      const STREET = "<th>ADDRESSSTREETNAME</th>";
      const POSTAL = "<th>ADDRESSPOSTALCODE</th>";
      const UNIT = "<th>ADDRESSUNITNUMBER</th>";

      // Index of Location Name
      // TODO:Check if building name is ""
      var startIndex;
      var endIndex;
      var location;

      if (mapState.localeCompare("ewaste") == 0) {
        startIndex = text.search(BUILDING);
        endIndex = text.search(BLOCK);
        location = text.slice(startIndex + 32, endIndex - 27);
      } else if (mapState.localeCompare("cashfortrash") == 0) {
        startIndex = text.search(STREET);
        endIndex = text.search(POSTAL);
        location = text.slice(startIndex + 30, endIndex - 27);
      } else if (mapState.localeCompare("lightingwaste") == 0) {
        startIndex = text.search(BUILDING);
        endIndex = text.search(UNIT);
        location = text.slice(startIndex + 33, endIndex - 27);
      } else if (mapState.localeCompare("secondhandgoods") == 0) {
        startIndex = text.search(STREET);
        endIndex = text.search(POSTAL);
        location = text.slice(startIndex + 30, endIndex - 27);
      } else {
        location = "";
        console.log("Error getting location of marker!");
      }
      console.log(location);
      // updateButtons(location);
    });
  }

  // If map fails to load
  function failure() {
    console.log("Failed to load!");
  }
}

// Updates Button Text to be the Location name
function updateButtons(location) {
  var locationText = document.getElementById("myButton1");
  locationText.value = location;
}
