fetch('https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination/master/assets/data/data.json')
  .then(res => res.json())
  .then(json => {
    json.forEach(element => {
      let latLng = new google.maps.LatLng(element.lat, element.lng);
      // Creating a marker and putting it on the map
      let marker = new google.maps.Marker({
        position: latLng,
        title: element.name,
        icon: element.icon
      });
      marker.setMap(map);
   
      
      var infowindow = new google.maps.InfoWindow({
  content: '<h4>'+element.name+'</h4><p><h5>'+element.type+'</h5></p><p>'+element.description+'</p>'
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});
     
});
    });
   

//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    //zoom on the map
    zoom: 11,
    //location of the map
    center: {lat: 13.9094, lng: -60.9789},
    //style of the map
    styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "32"
            },
            {
                "lightness": "-3"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "1.18"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-70"
            },
            {
                "lightness": "14"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-14"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": "12"
            }
        ]
    }
]
  });
    
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
