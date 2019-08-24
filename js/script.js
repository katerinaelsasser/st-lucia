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


    //info window code
    //  var infowindow =  new google.maps.InfoWindow({});
     //  var marker, count;
      // for (count = 0; count < locations.length; count++) {
      //marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(locations[count][1], locations[count][2]),
     //  title: locations[count][0],
      //map: map,
      //});
      
      $("#link1").click(function(){
    changeMarkerPos(14.0200, -60.9931);
});
$("#link2").click(function(){
    changeMarkerPos(13.7334, -60.9503);
});

marker.setMap(map);
    map.panTo(marker.position);
}

function changeMarkerPos(lat, lon){
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
}
      
      
      
      
      
                  google.maps.event.addListener(marker, 'click', (function (marker, count) {
                      return function () {
                      infowindow.setContent(locations[count][1]);
                            infowindow.open(map, marker);
                        };
                        })(marker, count));
                    }
}