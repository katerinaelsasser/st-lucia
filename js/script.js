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
 
 
    infowindow = new google.maps.InfoWindow();
        for(i=0; i<locations.length; i++) {
    	var position = new google.maps.LatLng(locations[i][2], locations[i][3]);
		var marker = new google.maps.Marker({
			position: position,
			map: map,
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(locations[i][1]);
				infowindow.setOptions({maxWidth: 200});
				infowindow.open(map, marker);
			};
		}) (marker, i));
		Markers[locations[i][4]] = marker;
	}
 
 google.maps.event.addListener(marker, 'click', function() {
   infowindow.open(map,marker);
});
 
 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });
            addMarkerInfo();
        }