//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 13.9094, lng: -60.9789},
  });
  
  //icon code
  //var icon = {
    //airport: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/airport.png',
    //attraction: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/attraction.png',
    //hotel: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/hotel.png',
    //restaurant: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/restaurant.png'
  //};


  
   // Looping through all the entries from the JSON data
  for(var i = 0; i < data.length; i++) {
    
    // Current object
    var obj = data[i];

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.lat,obj.lng),
      map: map,
      icon: obj.icon,
      title: obj.description
    });
    
    var infowindow = new google.maps.InfoWindow({
    content: obj.description,
  });
    
    // Adding a new info window for the object
    var clicker = addClicker(marker, obj.name);
 
  // Adding a new click event listener for the object
  function addClicker(marker, content) {
    google.maps.event.addListener(marker, 'click', function() {
      
      if (infowindow) {infowindow.close();}
      infowindow = new google.maps.InfoWindow({content: obj.description});
      infowindow.open(map, marker);
    
    });
  }
}
}