
        
    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
        
    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map
    });
    
    //Making The Action
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
        content: props.content
    });
    
    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    });
    google.maps.event.addListener(map, 'click', function() {
				infoWindow.close();
			});
    }
    }
}

