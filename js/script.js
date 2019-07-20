        //code for the marker locations
        var location = [
                [
                'title':'royalton resort',
                'about':'<p>TEST</p>',
                14.0969,
                -60.9498
                ],
                [
                'title':'st james club morgan bay',
                'about':'<p>TEST</p>',
                14.0406, 
                -60.9706
                ],
                [
                'title':'jade mountain resort',
                'about':'<p>TEST</p>',
                13.8646, 
                -61.0757
                ],
                [
                'title':'mango beach inn',
                'about':'<p>TEST</p>',
                13.9676,
                -61.0244
                ],
                [
                'title':'hummingbird beach resort',
                'about':'<p>TEST</p>',
                13.8583,
                -61.0622
                ],
                
        ];
 
        window.onload = function () {
            initMap();
        };
        //creating the content of the markers
        var Content =
	'<h2>' + Location.title + '</h2>' +
	'<br />' +
	'<p>' +
		Location.about
	'</p>';
     
     //creating the object
     infoWindow = new google.maps.InfoWindow({ content: sContent });
        
 //creating the information for the multiple markers   
 marker = new google.maps.Marker({
            position: position,
            map:      map,
            title:    markers[i][0],
            info:     Content
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