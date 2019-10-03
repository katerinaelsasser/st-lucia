//code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789},
            });

var marker = [];
      for(var i = 0; i < location.length; i++) {
        
        var content = location.description;
        var address = location.title;
        var customLabel = location.icon;
        var MyLatLng = google.maps.LatLng(location.lat,location.lng);

      };

                 $.ajax({
                   type: "GET",
                    url: 'https://github.com/katerinaelsasser/st-lucia-destination/blob/master/data.json',
                    dataType: "json",
                    success: function (marker, data) {
                        console.log(data);

                        if (data.length !== 0) {

                         var   latLng = new google.maps.LatLng(data.lat, data.lng);

                        // Creating a marker and putting it on the map
                        var marker = new google.maps.Marker({
                            position: latLng,
                            map: map,
                            title: data.title
                        });


                            $.each(data, function (marker, data) {
                                var windowContent = '<h3>' + data.title + '</h3>' +
                                    '<p>' + data.description + '</p>';
                                console.log(windowContent);

                                // Attaching a click event to the current marker
                                infobox = new InfoBox({
                                    content: infoWindow.setContent(windowContent),
                                });

                                google.maps.event.addListener(marker, 'click', function () {

                                    // Open this map's infobox
                                    infobox.open(map, marker);
                                    infobox.setContent(windowContent);
                                    map.panTo(marker.getPosition());
                                    infobox.show();
                                });
                                google.maps.event.addListener(map, 'click', function () {
                                    infobox.setMap(null);
                                });
                            });

                        } 


                    },

                });
                



//custom markers

var customLabel = {
  restaurant: {
    label: 'R'
  },
  hotel: {
    label: 'H'
  }
};



    
    
    
    

//Gallery/Lightbox code
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



//Nav Bar Modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

}