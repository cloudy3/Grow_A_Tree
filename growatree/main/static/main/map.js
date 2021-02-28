var map;
var src = "https://geo.data.gov.sg/ewaste/2021/02/19/kml/ewaste.kml";

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
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
