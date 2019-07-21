var locations = [
     //Hotels
    ['<h2>Royalton Resort</h2><p>Hotel</p>', 14.0969 , -60.9498, type: hotel],
    ['<h2>St James Club Morgan Bay</h2><p>Hotel</p>', 14.0406, -60.9706, type: hotel],
    ['<h2>Jade Mountain Resort</h2><p>Hotel</p>', 13.8646, -61.0757, type: hotel],
    ['<h2>Mango Beach Inn</h2><p>Hotel</p>', 13.9676, -61.0244, type: hotel],
    ['<h2>Hummingbird Beach Resort</h2><p>Hotel</p>', 13.8583, -61.0622, type: hotel],
    //Stonefield Villa Resort
    //Marigold Beach Club & Dive Resort
    //Coco Palm Resort
    //Samfi Gardens
    //Tet Rouge Resort
    //Starfish St Lucia
    //Harbour Club
    //Mystique Royal
    //Ladeva Resort
    
    //Resturant
    //The Cluff At Cap
    //Big Chef Steakhouse
    //Rainforest Hideaway
    //Dasheene
    //Boucan
    //The Coal Pit
    //Fox Grove Inn
    //Flavours of the Grill
    //Cafe Ole
  ];

//icon colours
var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
          hotels: {
            icon: iconBase + 'blue-dot.png'
          },
          resturants: {
            icon: iconBase + 'url: pink-dot.png'
          },
          
        };



//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });

                var infowindow =  new google.maps.InfoWindow({});
                    var marker, count;
                    for (count = 0; count < locations.length; count++) {
                        marker = new google.maps.Marker({
                          position: new google.maps.LatLng(locations[count][1], locations[count][2]),
                          map: map,
                          title: locations[count][0]
                        });
                    google.maps.event.addListener(marker, 'click', (function (marker, count) {
                          return function () {
                            infowindow.setContent(locations[count][0]);
                            infowindow.open(map, marker);
                          };
                        })(marker, count));
                      }
                    }
                

                    
