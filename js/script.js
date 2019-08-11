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

var icons = {
          hotel: {
            icon: 'assets/images/markers/lodging.png',
          },
          attraction: {
            icon: 'assets/images/markers/attraction.png',
              
          },
          restaurant: {
            icon: 'assets/images/markers/restaurant.png',
          },
          airport: {
            icon: 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-b05ecc/shapecolor-color/shadow-1/border-dark/symbolstyle-white/symbolshadowstyle-dark/gradient-no/airport.png',
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
                          icon: icons[locations[count][3]].icon,
                          
                        });
                    google.maps.event.addListener(marker, 'click', (function (marker, count) {
                          return function () {
                            infowindow.setContent(locations[count][0]);
                            infowindow.open(map, marker);
                          };
                        })(marker, count));
                      }
                    }
                