//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 13.9094, lng: -60.9789},
  });


  var infowindow = new google.maps.InfoWindow({
      content: data.description
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
    
    var latlng = new google.maps.LatLng (data.lat, data.lng);
    
    for (i = 1; i <= data.length; i++) {
        var data = markers[i-1]
        var Latlng = new google.maps.LatLng(data.lat, data.lng);
       
        var marker = new MarkerWithLabel({
            position: Latlng,
            map: map,
            title: data.title,
         });
}
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
}