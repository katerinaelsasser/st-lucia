
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
                    var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
                        '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';

                    const marker = new google.maps.Marker({
                        position: markersOnMap[i].LatLng[0],
                        map: map
                    });

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 200
                    });
//the click function on the info window
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
//code for the map location
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: new google.maps.LatLng(13.9094, -60.9789)
                });
                addMarkerInfo();
            }


 
 /*       
var map 
function initMap() {
new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(13.9094, -60.9789),
    
});

    var infowindow = new google.maps.InfoWindow();
//hotel locations
var locations = [
        //royalton resort
        ['Royalton Resort', 14.0969, -60.9498, 1],
        //st james club morgan bay
        ['st james club morgan bay', 14.0406, -60.9706, 2],
        //jade mountain resort
        ['jade mountain', 13.8646, -61.0757, 3],
        //mango beach inn
        ['mango beach inn', 13.9676, -61.0244, 4],
        //hummingbird beach resort
        ['hummingbird beach resort', 13.8583, -61.0622, 5]
        ];
 
} */