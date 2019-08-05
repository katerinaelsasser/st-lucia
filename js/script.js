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


//code for the different markers
var iconBase = 'assets/images/markers/';

var icons = {
          hotel: {
            icon: 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-4fe354/shapecolor-white/shadow-1/border-color/symbolstyle-color/symbolshadowstyle-no/gradient-no/lodging-2.png'
          },
          attraction: {
            icon: iconBase + 'attraction.png'
              
          },
          restaurant: {
            icon: iconBase + 'restaurant.png'
          },
          airport: {
              icon: 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-474ed1/shapecolor-white/shadow-1/border-color/symbolstyle-color/symbolshadowstyle-no/gradient-no/airport.png'
          }
        };
        
       
        //info window code
                var infowindow =  new google.maps.InfoWindow({});
                    var marker, count;
                    for (count = 0; count < locations.length; count++) {
                        marker = new google.maps.Marker({
                          position: latLng,
                          map: map,
                          content: data.content,
                        });
                    google.maps.event.addListener(marker, 'click', (function (marker, count) {
                          return function () {
                            infowindow.setContent(locations[count][0]);
                            infowindow.open(map, marker);
                          };
                        })(marker, count));
                      }
                    }
                