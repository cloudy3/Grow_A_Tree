"use strict";

var map = null;
var infowindow = null;
var markers = [];

var GOOGLE_MAPS_API_KEY = 'AIzaSyBnZtv1xAxEgTHcme4vJTF2SBU0f06FmqQ';

var src = "https://geo.data.gov.sg/ewaste/2021/02/19/kml/ewaste.kml";
var cash_for_trash_src = "https://geo.data.gov.sg/cashfortrash/2019/02/27/kml/cashfortrash.kml";

// Defaults to centre of Singapore
var defaultPosition = {
  coords: {
    latitude: 43.6722780,
    longitude: -79.3745125
  }
};

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 1.3667, lng: 103.8 },
  });

  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    // preserveViewport: false,
    map: map,
  });

  kmlLayer.addListener('click', function(kmlEvent) {
    var text = kmlEvent.featureData.description;
    showInContentWindow(text);
  });

  function showInContentWindow(text) {
    var sidediv = document.getElementById('content-window');
    sidediv.innerHTML = text;
  }
}

/**


var yelpSearch = function(map, infoWindow, position, term) {

  var ajaxData = {
    limit: 10,
    radius: 200,
    sort: 'distance',
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  };
  if (term) {
    ajaxData.term = term;
  }

  $.ajax({
    method: "get",
    url: '/api/v1/yelp/search/',
    data: ajaxData
  }).done(function (data) {
    for (var i = 0; i < data.businesses.length; i++) {
      var business = data.businesses[i];
      var marker = new google.maps.Marker({
        id: i,
        title: business.name,
        url: business.url,
        position: {
          lat: business.coordinates.latitude,
          lng: business.coordinates.longitude
        },
        map: map
      });
      markers.push(marker);

      google.maps.event.addListener(marker, 'click', (function (marker, key) {
        return function () {
          var content = '<div><a target="_blank" href="' + marker.url + '">' + marker.title + '</a></div>';
          infowindow.setContent(content);
          infowindow.open(map, marker);
        };
      })(marker, i));
    }
  }).fail(function (error) {
    console.log("Unable to access yelp");
    console.log(error);
  });
};


var populateMap = function (geoPosition, term) {

  $('#geolocation').hide();

  infowindow = new google.maps.InfoWindow({
    content: "hello"
  });

  var position = geoPosition;
  if (!position) {
    position = defaultPosition;
  }

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    },
    zoom: 16
  });

  // Make info window for marker show up above marker
  var windowOptions = {
    pixelOffset: {
      height: -32,
      width: 0
    }
  };

  yelpSearch(map, infowindow, position);

};


var geolocationFail = function() {
  populateMap(defaultPosition);
};


var initMap = function() {
  if (navigator.geolocation) {
    var location_timeout = setTimeout(geolocationFail, 5000);

    navigator.geolocation.getCurrentPosition(function(position) {
      clearTimeout(location_timeout);
      populateMap(position);
    }, function (error) {
        clearTimeout(location_timeout);
        geolocationFail();
    });
  } else {
    // Fallback for no geolocation
    geolocationFail();
  }
};


var clearMarkers = function(markers) {
  for (var i=0; i<markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
};


$('#id_search_form').on('submit', function(event) {
  event.preventDefault();
  clearMarkers(markers);
  var center = map.getCenter();
  var position = {
    coords: {
      latitude: center.lat(),
      longitude: center.lng()
    }
  };
  yelpSearch(map, infowindow, position, $('#id_term').val());
});
**/