 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });

                for (var i = 0; i < data.length; i++) {
      var current = data[i];
  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(current.position.lat, current.position.lng),
        map: map,
        content: current.content
      });
  
      markers.push(marker);
  
      google.maps.event.addListener(markers[i], "click", function (e) {
        var infoBox = new InfoBox({
            latlng: this.getPosition(),
            map: map,
            content: this.content
        });
      });
    }
}
