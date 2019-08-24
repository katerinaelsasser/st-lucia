//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
                mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
            }
            });


    //info window code
    var infowindow =  new google.maps.InfoWindow({});
      var marker, count;
       for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[count][2], locations[count][3]),
      title: locations[count][0],
      content: locations[count][1],
    map: map,
    });
  
      
                  google.maps.event.addListener(marker, 'click', (function (marker, count) {
                      return function () {
                      infowindow.setContent(locations[count][1]);
                            infowindow.open(map, marker);
                        };
                        })(marker, count));
                    }
}