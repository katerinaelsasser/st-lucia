        //code for the marker locations
        var markersOnMap = [{
                placeName: "royalton resort",
                    LatLng: [{
                        lat: 14.0969,
                        lng: -60.9498
                    }]
                },
                {
                    placeName: "st james club morgan bay",
                    LatLng: [{
                        lat: 14.0406,
                        lng: -60.9706
                    }]

                },
                {
                    placeName: "jade mountain resort",
                    LatLng: [{
                        lat: 13.8646,
                        lng: -61.0757
                    }]

                },
                {
                    placeName: "mango beach inn",
                    LatLng: [{
                        lat: 13.9676,
                        lng: -61.0244
                    }]

                },
                {
                    placeName: "hummingbird beach resort",
                    content: "test",
                    LatLng: [{
                        lat: 13.8583,
                        lng: -61.0622
                    }]
            }
        ];
 
        window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName + '</h1>' + markersOnMap[i].content + '</p></div>';
 
                var marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map
                });
 
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
                
            }
        }
 
 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });
            addMarkerInfo();
        }