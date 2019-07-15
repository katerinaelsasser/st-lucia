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
        
var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(13.9094, -60.9789),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }