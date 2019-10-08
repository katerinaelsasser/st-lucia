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
            icon: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/airport.png'
          },
          attraction: {
            icon: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/attraction.png'
          },
          hotel: {
            icon: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/hotel.png'
          },
          restaurant: {
            icon: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/images/markers/restaurant.png'
          }
        };
    
    var latlng = new google.maps.LatLng (data.lat, data.lng)
    
    var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: data.name,
    icon: icons[data.type].icon,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  
}