//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 13.9094, lng: -60.9789},
  });


 
    
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
    
    var markers = [];
      // Looping through all the entries from the JSON data
      for(var i = 0; i < json.length; i++) {
        // Current object
        var Modalcontent = data.description;
        var address = data.title;
        var MyLatLng = new google.maps.LatLng(data.lat,data.lng);

        var marker = new CustomMarker(
    		MyLatLng,
    		map,
        {
          title: address,
          content: Modalcontent,
    		}

    	);

}
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
}