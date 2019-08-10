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


//code for the custom markers

var icon = {
          hotel: {
            url: 'assets/images/markers/lodging.png',
          },
          attraction: {
            url: 'assets/images/markers/attraction.png',
              
          },
          restaurant: {
            url: 'assets/images/markers/restaurant.png',
          },
          airport: {
            url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/airport.png',
          }
        };
        
       
        //info window code
                var infowindow =  new google.maps.InfoWindow({});
                    var marker, count;
                    for (count = 0; count < locations.length; count++) {
                        marker = new google.maps.Marker({
                          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
                          map: map,
                          title: locations[count][0],
                          icon: locations[count][3],
                          
                        });
                    google.maps.event.addListener(marker, 'click', (function (marker, count) {
                          return function () {
                            infowindow.setContent(locations[count][0]);
                            infowindow.open(map, marker);
                          };
                        })(marker, count));
                      }
                    }
                