
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.9094, lng:-60.9789},
          zoom: 10
        });
        //end of code for the map
        
        var locations = [
        //Hotels
            //Location of Royalton Hotel
                {"hotel":"true",title":"Royalton Resort",lat":"14.0969","lng":"-60.9498","content":""},
            //Location of St James Club Morgan Bay
                {"hotel":"true","title":"St James Club Morgan Bay","lat":"14.0406","lng":"-60.9706","content":""},
            //Location of Jade Mountain Resort
                {"hotel":"true","title":"Jade Mountain Resort","lat":"13.8646","lng":"-61.0757","content":""},
            //Location of Sandales Regancy La Toc
                {"hotel":"true","title":"Sandales Regancy La Toc","lat":"14.0083","lng":"-61.0091","content":""},
            //Location of Sandales Grande St. Lucian
                {"hotel":"true","title":"Sandales Grande St. Lucian","lat":"14.0913","lng":"-60.9585","content":""},
            //Location of Sandales Halcyon Beach
                {"hotel":"true","title":"Sandales Halcyon Beach","lat":"14.0308","lng":"-60.9772","content":""},
            //Location of Mango Beach Inn
                {"hotel":"true","title":"Sandales Halcyon Beach","lat":"13.9676","lng":"-61.0244","content":""},
            //Hummingbird Resort
                {"hotel":"true","title":"Sandales Halcyon Beach","lat":"13.8583","lng":"-61.0622","content":""},
            //Bay Gardens Beach Resort
                {"hotel":"true","title":"Sandales Halcyon Beach","lat":"14.0769","lng":"-60.9540","content":""},
            //The Harbour Club
                {"hotel":"true","title":"Sandales Halcyon Beach","lat":"14.0736","lng":"-60.9479","content":""},
            //Boucan by Hotel Chocolat
                {"hotel":"true","title":"Sandales Halcyon Beach","lat":"13.8332","lng":"-61.0503","content":""},
            //Coco Palm Resort
            {"hotel":"true","title":"Sandales Halcyon Beach","lat":"14.0697","lng":"-60.9554","content":""},
    
            ];
      
      var marker = locations.map (function(location, i) {
        return new google.maps.Marker;
        position: location,
        label: labels[i % labels.length]
      });
      
      });
      
      
      
      
      /* info window for markers  
        google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(map, event.latLng);
});

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
} */
//end of code markers/info window
      }
