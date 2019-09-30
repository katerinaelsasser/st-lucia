//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
            });


//info window code
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < json.length; count++) {
marker = new google.maps.Marker({
 position: new google.maps.LatLng(json.lat, json.lng),
title: json.name,
content: json.description,
map: map,
});
  
      
                  google.maps.event.addListener(marker, 'click', (function (marker, count) {
              return function () {
              infowindow.setContent(json.description);
                    infowindow.open(map, marker);
                };
                })(marker, count));
            }
}



//custom markers

var customLabel = {
  restaurant: {
    label: 'R'
  },
  hotel: {
    label: 'H'
  }
};



    
    
    
    

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
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



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
