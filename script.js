//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
            });


//info window code
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
marker = new google.maps.Marker({
 position: new google.maps.LatLng(locations.lat, locations.lng),
title: locations.name,
content: locations.description,
map: map,
});
  
      
                  google.maps.event.addListener(marker, 'click', (function (marker, count) {
              return function () {
              infowindow.setContent(locations.description);
                    infowindow.open(map, marker);
                };
                })(marker, count));
            }
}


//Gallery/Lightbox

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
