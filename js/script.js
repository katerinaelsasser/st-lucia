        //code for the marker locations
 
        var markers = [{
                placeName: "Royalton Resort",
                LatLng: [{
                    lat: 14.0969,
                    lng: 60.9498
                }],
                about: "test test test"
            }
        ];
 
        window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markers.length; i++) {
                var contentString = '<div id="content"><h1>' + markers[i].placeName + '</h1><p>' + markers[i].about + '</p></div>';
 
                const marker = new google.maps.Marker({
                    position: markers[i].LatLng[0],
                    map: map
                });
 
                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });
 
                marker.addListener('click', function () {
                    closeOtherInfo();
                    infowindow.open(marker.get('map'), marker);
                    InforObj[0] = infowindow;
                });
                
            }
        }
 
        function closeOtherInfo() {
            if (InforObj.length > 0) {
                InforObj[0].set("marker", null);
                InforObj[0].close();
                InforObj.length = 0;
            }
        }

 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });
            
            
        }