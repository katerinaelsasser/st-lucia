
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
                    LatLng: [{
                        lat: 13.8583,
                        lng: -61.0622
                    }]
 
                }
                ];
                
        
//the code to make the markers/info window
window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = markersOnMap[i].placeName[i] + markersOnMap[i].content[i];
 
                var marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map
                });
 
                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });
 
                google.maps.event.addListener( marker, 'click', ( 
					function( marker, i ) {
						return function() {
							var infowindow = new google.maps.InfoWindow();
							infowindow.setContent( markersOnMap[ i ][ 0 ] );
							infowindow.open( map, marker );
						};
					}
					)( marker, i )
            	
            );
        
            	function closeOtherInfo() {
            if (InforObj.length > 0) {
                InforObj[0].set("marker", null);
                InforObj[0].close();
                InforObj.length = 0;
            }
            }
 
        }
 function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });
            addMarkerInfo();
        }
        }