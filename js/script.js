//code for the map
var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.9094, lng: -60.9789},
      zoom: 10
    });
}
    //code to create cluster of locations
    for (i = 1; i <= markers.length; i++) {
        var data = markers[i-1]
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    }
   var marker = new MarkerWithLabel({
            position: myLatlng,
            map: map,
            title: data.title,
            labelContent: i,
         });

        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent(data.description);
                infoWindow.open(map, marker);
            });
        })(marker, data);