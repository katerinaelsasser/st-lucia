function initMap(){
            // Location of St Lucia
var map = new google.maps.Map(document.getElementById('map'), {
                zoom:10,
                center: {
                    lat: 13.9094, 
                    lng:-60.9789
                }
            });
            
            //HOTELS
            // Royalton Resort
            var marker = new google.maps.Marker({
              position: {
                        lat: 14.0969,
                        lng:-60.9498
                    },
              map: map,
            });
            
            var infowindow = new google.maps.InfoWindow({
              content: '<h4>Royalton Resort</h4>',
            });
            
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
            
            // St James Club Morgan Bay
            var marker = new google.maps.Marker({
              position: {
                        lat: 14.0406,
                        lng:-60.9706
                    },
              map: map,
            });
            var infowindow = new google.maps.InfoWindow({
              content:'<h4>St James Club Morgan Bay</h4>',
            });
            
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
            
        }