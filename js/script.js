//code for creating the map
        function initMap() {
          
        var icons = {
          hotel: {
            icon: 'https://mapicons.mapsmarker.com/wp-content/uploads/mapicons/shape-default/color-33de69/shapecolor-white/shadow-1/border-color/symbolstyle-color/symbolshadowstyle-no/gradient-no/lodging-2.png'
          },
          mountain: {
            icon: iconBase + 'mountain_maps.png'
          },
          
        };
          
          
          
            var styledMapType = new google.maps.StyledMapType(
             [
               {
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  }
                ]
                );
            
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
                          position: features[i].position,
                          icon: icons[features[i].type].icon,
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
                

                    
