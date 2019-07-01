//code for the map
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.9094, lng:-60.9789},
          zoom: 10
        });
        //end of code for the map
        
      
      if (hotel === true) {
          var marker = new google.maps.Marker;
      } 
      
      
      
      /* info window for markers  
        google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(map, event.latLng);
});

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
} */
//end of code markers/info window
      }
