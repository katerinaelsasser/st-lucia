function initMap(){
    // Location of St Lucia
     var options = {
        zoom:10,
        center: {lat: 13.9094,lng:-60.9789}
        };
    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);
        
    // Markers
    // Royalton Resort - Hotel
    addMarker({
        coords:{lat:14.0969,lng:-60.9498},
        content:'<button id="myBtn" class="btn btn-primary">Tester</button>'
        
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
        content:'<h6>Mango Beach Inn</h6>'
    });
    
    // Hummingbird Resort - Hotel
    addMarker({
        coords:{lat:13.8583,lng:-61.0622},
        content:'<h6>Hummingbird Resort</h6>'
    });
    
    // Bay Gardens Beach Resort - Hotel
    addMarker({
        coords:{lat:14.0769,lng: -60.9540},
        content:'<h6>Bay Gardens Beach Resort</h6>'
    });
    
    // The Harbor Club - Hotel
    addMarker({
        coords:{lat:14.0736,lng: -60.9479},
        content:'<h6>The Harbor Club</h6>'
    });
    
    // Boucan by Hotel Chocolat - Hotel
    addMarker({
        coords:{lat:13.8332,lng: -61.0503},
        content:'<h6>Boucan by Hotel Chocolat</h6>'
    });
    
    // Coco Palm Resort - Hotel
    addMarker({
        coords:{lat:14.0697,lng: 60.9554},
        content:'<h6>Coco Palm Resort</h6>'
    });
    
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
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}