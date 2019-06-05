function initMap(){
    // Location of St Lucia
     var options = {
        zoom:10,
        center: {lat: 13.9094,lng:-60.9789}
        }
    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
        
    // New Marker
    var marker = new google.maps.Marker({
        position:{lat:14.0969,lng:-60.9498},
        map:map
    });
    
    var infoWindow = new google.maps.InfoWindow({
        content:'<h6>Royalton</h6>'
    });
    
    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    })
}