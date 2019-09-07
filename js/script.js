//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
            });


//info window code
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
marker = new google.maps.Marker({
 position: new google.maps.LatLng(locations.lat, locations.lng),
title: locations.name,
content: locations.description,
map: map,
});
  
      
                  google.maps.event.addListener(marker, 'click', (function (marker, count) {
              return function () {
              infowindow.setContent(locations.description);
                    infowindow.open(map, marker);
                };
                })(marker, count));
            }
}