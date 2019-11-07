fetch('../data/data.json')
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.forEach(element => {
      let latLng = new google.maps.LatLng(element.lat, element.lng);
      // Creating a marker and putting it on the map
      let marker = new google.maps.Marker({
        position: latLng,
        title: element.name,
        icon: element.icon
      });
      marker.setMap(map);
    });
    let contentString = '<h2>' + data.title + '</h2><p>' + data.description + '</p>';
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(theMap, marker);
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(theMap, marker);
    });
  });


//code for creating the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    //zoom on the map
    zoom: 10,
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


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});