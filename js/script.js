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
        //creating the content of the markers
        var sContent =
	'<h2>' + oLocation.title + '</h2>' +
	'<br />' +
	'<p>' +
		oLocation.address1 + ' ' +
		oLocation.address2 +
		'<br />' +
		oLocation.city +
		'<br />' +
		oLocation.province +
		oLocation.zip +
	'</p>';
     
     //creating the object
     infoWindow = new google.maps.InfoWindow({ content: sContent });
        
 //creating the information for the multiple markers   
 marker = new google.maps.Marker({
            position: position,
            map:      map,
            title:    markers[i][0],
            info:     sContent
        });
 
 //creating the function of the info window
            google.maps.event.addListener( marker, 'click', function() {
               infoWindow.setContent( this.info );
               infoWindow.open( map, this );
            });
 
        
 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });
            
            
        }