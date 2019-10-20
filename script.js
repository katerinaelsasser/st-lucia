var map;
var icon = "http://path/to/icon.png";
var json = "http://path/to/universities.json";
var infowindow = new google.maps.InfoWindow();

function initialize() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 13.9094, lng: -60.9789},
  });


  $.each(data.database, function(key, data) {

    var latLng = new google.maps.LatLng(data.lat, data.lng);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      // icon: icon,
      title: data.name
    });

    bindInfoWindow(marker, map, infowindow, details);

    //    });

  });

}

function bindInfoWindow(marker, map, infowindow, strDescription) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(strDescription);
    infowindow.open(map, marker);







//code for creating the map
//function initMap() {
  //map = new google.maps.Map(document.getElementById('map'), {
    //zoom: 10,
    //center: {lat: 13.9094, lng: -60.9789},
  //});
  

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
