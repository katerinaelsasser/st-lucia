//code for the map
var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.9094, lng: -60.9789},
      zoom: 10
    });
    //code to create cluster of locations
    var marker = new google.maps.Marker({
    position: locations,
    map: map,
  });
    
    
    var location = new google.maps.LatLng(14.0969, -60.9498);
    
    
    /*
    var locations = [
        //royalton resort
        {lat: 14.0969, lng: -60.9498},
        //st james club morgan bay
        {lat: 14.0406, lng: -60.9706},
        //jade mountain resort
        {lat: 13.8646, lng: -61.0757},
        //mango beach inn
        {lat: 13.9676, lng: -61.0244},
        //hummingbird beach resort
        {lat: 13.8583, lng: -61.0622}
        ];  
    */
  }