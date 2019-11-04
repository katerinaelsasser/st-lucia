
fetch('https://github.com/katerinaelsasser/st-lucia-destination/blob/master/assets/data/data.json')
  .then(response => res.json())
  .then(json => console.log(json));

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
  
for(var i = 0; i < json.length; i++) {
    
    // Current object
    var data = json[i];

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(data.latitude,data.longitude),
      map: map,
      title: data.title // this works, giving the marker a title with the correct title
    });
    
    // Adding a new info window for the object
    var clicker = addClicker(marker, data.title);  
  
  
    const infowindow = new google.maps.InfoWindow({
    content: data.description,
  });
  
  google.maps.event.addEventListener(marker, 'click', function(){
      infowindow.open(map,marker);
  });
    
}
}

//what the info window should have in it = ('<h2>'+obj.title+'</h2><h4><i>'+obj.type+'</i></h4><p>'+obj.description+'</p>')
