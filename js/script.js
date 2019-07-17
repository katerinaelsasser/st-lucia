        //code for the marker locations
        var locations = [
                [
                'royalton resort',
                '<p>TEST</p>',
                14.0969,
                -60.9498
                ],
                [
                'st james club morgan bay',
                '<p>TEST</p>',
                14.0406, 
                -60.9706
                ],
                [
                'jade mountain resort',
                '<p>TEST</p>',
                13.8646, 
                -61.0757
                ],
                [
                'mango beach inn',
                '<p>TEST</p>',
                13.9676,
                -61.0244
                ],
                [
                'hummingbird beach resort',
                '<p>TEST</p>',
                13.8583,
                -61.0622
                ],
                
        ];
 
        window.onload = function () {
            initMap();
        };
 
 
 
    
 
 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });
            
            //marker code
            infowindow = new google.maps.InfoWindow();
            for (var i = 0; i < markers.length; i++) {
                var marker = markers[i];
                google.maps.event.addListener(marker, 'click', function () {
                // where I have added .html to the marker object.
                infowindow.setContent(this.html);
                infowindow.open(map, this);
                });
        }
        }