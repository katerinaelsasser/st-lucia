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
            icon: '.png'
          },
          attraction: {
            icon: '.png'
          },
          info: {
            icon: 's.png'
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