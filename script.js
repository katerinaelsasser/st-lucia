fetch('data.json')
.then(function(response) {
  // Do stuff with the response
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});


//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 13.9094, lng: -60.9789},
  });
  

  var markers = [  {
      'name': 'George F L Charles Airport',
      'content': '<h2>George F L Charles Airport</h2><h4><i>Airport</i></h4>',
      coords:{lat: 14.0200, lng: -60.9931},
      'icon': 'airport'
      },
    {
      'name': 'Hewanorra International Airport',
      'description': '<h2>Hewanorra International Airport</h2><h4><i>Airport</i></h4>',
      coords:{lat: 13.7334, lng: -60.9503},
      'icon': 'airport'
      }];
      
      for(var i = 0;i < markers.length;i++){
         //adding marker
         addMarker(markers[i]);
      }
      
      //add marker function
      function addMarker(props){
      var marker = new google.maps.Markers({
        position: props.coords,
        map:map
      });
    }
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            };
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
  };
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
