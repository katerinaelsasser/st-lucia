function initMap(){
    // Location of St Lucia
     var options = {
        zoom:10,
        center: {lat: 13.9094,lng:-60.9789}
        }
    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
        
    // Markers
    // Royalton Resort - Hotel
    addMarker({
        coords:{lat:14.0969,lng:-60.9498},
        content:'<h6>Royalton Resort<h6>'
        
    });
    // St James Club Morgan Bay - Hotel
    addMarker({
        coords:{lat:14.0406,lng:-60.9706},
        content:'<h6>St James Club Morgan Bay<h6>'
    });
    
    // Jade Mountain Resort - Hotel
    addMarker({
        coords:{lat:13.8646,lng:-61.0757},
        content:'<h6>Jade Mountain Resort<h6>'
    });
    
    // Sandales Regency La Toc - Hotel
    addMarker({
        coords:{lat:14.0083,lng:-61.0091},
        content:'<h6>Sandales Regency La Toc</h6>'
    });
    
    // Sandales Grande St. Lucian - Hotel
    addMarker({
        coords:{lat:14.0913,lng:-60.9585},
        content:'<h6>Sandales Grande St. Lucian</h6>'
    });
    
    // Sandales Halcyon Beach - Hotel
    addMarker({
        coords:{lat:14.0308,lng:-60.9772},
        content:'<h6>Sandales Grande St. Lucian</h6>'
    });
    
    // Mango Beach Inn - Hotel
    addMarker({
        coords:{lat:13.9676,lng:-61.0244},
        content:'<h6>Sandales Grande St. Lucian</h6>'
    });
    
    // Hummingbird Resort - Hotel
    addMarker({
        coords:{lat:13.8583,lng:-61.0622},
        content:'<h6>Sandales Grande St. Lucian</h6>'
    });
    
    // Add Marker Function
    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map
    });
    
    //testing content
    if(props.content){
        var infoWindow = new google.maps.InfoWindow({
        content: props.content
    });
    
    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    });
    }
    
    
    
    }
}