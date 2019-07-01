var locations = JSON.parse("[" + mapElement.getAttribute('data-markers') + "]");

//code for the map
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.9094, lng:-60.9789},
          zoom: 10
        });
      }
//end of code for the map