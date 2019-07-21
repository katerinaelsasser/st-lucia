var locations = [
     //Royalton resort
    ['Royalton resort', 14.0969 , -60.9498],
    //St James Club Morgan Bay
    ['St James Club Morgan Bay', 14.0406, -60.9706],
    //Jade Mountain Resort
    ['Jade Mountain Resort', 13.8646, -61.0757],
  ];

//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });

                var infowindow =  new google.maps.InfoWindow({});
                    var marker, count;
                    for (count = 0; count < locations.length; count++) {
                        marker = new google.maps.Marker({
                          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
                          map: map,
                          title: locations[count][0]
                        });
                    google.maps.event.addListener(marker, 'click', (function (marker, count) {
                          return function () {
                            infowindow.setContent(locations[count][0]);
                            infowindow.open(map, marker);
                          };
                        })(marker, count));
                      }
                    }

                    
