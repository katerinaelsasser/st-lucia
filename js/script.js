//code for the map
var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.9094, lng: -60.9789},
      zoom: 10
    });
  }
    //code to create cluster of locations
    
   var marker = new MarkerWithLabel({
            position: myLatlng,
            map: map,
            title: data.title,
            labelContent: i,
            labelAnchor: new google.maps.Point(7, 30),
            labelClass: "labels", // the CSS class for the label
            labelInBackground: false
         });

        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent(data.description);
                infoWindow.open(map, marker);
            });
        })(marker, data);