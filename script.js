//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 13.9094, lng: -60.9789},
  });
  
 google.maps.Data('www.github.com/katerinaelsasser/st-lucia-destination/blob/master/data.json');
  
  
  
    var icons = {
          airport: {
            url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/airport.png'
          },
          attraction: {
            url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/attraction.png'
          },
          hotel: {
            url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/hotel.png'
          },
          restaurant: {
            url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/restaurant.png'
          }
        };
    
     // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
}

//Modal St Lucia

  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
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
