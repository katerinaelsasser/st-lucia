var markersOnMap = [{
                    placeName: "royalton resort",
                    contentString: "test" ,
                    LatLng: [{
                        lat: 14.0969,
                        lng: -60.9498
                    }]
                },
                {
                    placeName: "st james club morgan bay",
                    contentString: "test" ,
                    LatLng: [{
                        lat: 14.0406,
                        lng: -60.9706
                    }]

                },
                {
                    placeName: "jade mountain resort",
                    contentString: "test" ,
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
                    contentString: "test" ,
                    LatLng: [{
                        lat: 13.8583,
                        lng: -61.0622
                    }]
 
                }
                ];
        
                window.onload = function () {
                    initMap();
                };
        
                function addMarker() {
                    for (var i = 0; i < markersOnMap.length; i++) {
                        var contentString = markersOnMap[i].placeName + markersOnMap[i].contentString;
        
                        var marker = new google.maps.Marker({
                            position: markersOnMap[i].LatLng[0],
                            map: map
                        });
        
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            maxWidth: 200
                        });
        
                        markersOnMap.addListener('click', function() {
    					infowindow.open(map, marker);
						});
                        
                    }
                }
        
                function closeOtherInfo() {
                    if (infowindow.length > 0) {
                        infowindow[0].set("marker", null);
                        infowindow[0].close();
                        infowindow.length = 0;
                    }
                }
        
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 10,
                        center: {lat: 13.9094, lng: -60.9789}
                    });
                    addMarker();
                }
