//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
            });

var marker = [];
      for(var i = 0; i < location.length; i++) {
        
        var content = location.description;
        var address = location.title;
        var customLabel = location.icon;
        var MyLatLng = google.maps.LatLng(location.lat,location.lng);

      };

                 $.ajax({
                   type: "GET",
                    url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/data.json',
                    dataType: "json",
                    success: function (marker, data) {
                        console.log(data);

                        if (data.length !== 0) {

                         var   latLng = new google.maps.LatLng(data.lat, data.lng);

                        // Creating a marker and putting it on the map
                        var marker = new google.maps.Marker({
                            position: latLng,
                            map: map,
                            title: data.title
                        });


                            $.each(data, function (marker, data) {
                                var windowContent = '<h3>' + data.title + '</h3>' +
                                    '<p>' + data.description + '</p>';
                                console.log(windowContent);

                                // Attaching a click event to the current marker
                                infobox = new InfoBox({
                                    content: infoWindow.setContent(windowContent),
                                });

                                google.maps.event.addListener(marker, 'click', function () {

                                    // Open this map's infobox
                                    infobox.open(map, marker);
                                    infobox.setContent(windowContent);
                                    map.panTo(marker.getPosition());
                                    infobox.show();
                                });
                                google.maps.event.addListener(map, 'click', function () {
                                    infobox.setMap(null);
                                });
                            });

                        } 


                    },

                });
                
}