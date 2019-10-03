//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
            });

var infoWindow = new google.maps.InfoWindow();

function setMarkerPoints(map, marker) {
    var bounds = new google.maps.LatLngBounds();

                 $.ajax({
                  type: "GET",
                  url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/data.json',
                  dataType: "json",
                  success: function(data) {
            
                    if (data.length !== 0) {
            
            
                      $.each(data, function(marker, data) {
            
            
                        var latLng = new google.maps.LatLng(data.lat, data.lng);
                        bounds.extend(latLng);
            
                        // Creating a marker and putting it on the map
                        var marker = new google.maps.Marker({
                          position: latLng,
                          map: map,
                          title: data.title
                        });
            
            
                        var windowContent = data.title + data.description;
            
                        // Attaching a click event to the current marker
                        infobox = new InfoBox({
                          content: infoWindow.setContent(windowContent),
                          alignBottom: true,
                          pixelOffset: new google.maps.Size(-160, -45)
                        });
            
                        google.maps.event.addListener(marker, 'click', function() {
            
                          // Open this map's infobox
                          infobox.open(map, marker);
                          infobox.setContent(windowContent);
                          map.panTo(marker.getPosition());
                          infobox.show();
                        });
                        google.maps.event.addListener(map, 'click', function() {
                          infobox.setMap(null);
                        });
                      });
                      map.fitBounds(bounds);
            
                    }
            
                  },
                  error: function(data) {
                    console.log('Please refresh the page and try again');
                  }
                });
                //END MARKER DATA
            
                // end loop through json
            
              }
              setMarkerPoints(map);
            
            
            
            google.maps.event.addDomListener(window, 'load', initMap);
                            
        }