//code for the map
var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.9094, lng: -60.9789},
      zoom: 10
    });
    //code to create cluster of locations
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }