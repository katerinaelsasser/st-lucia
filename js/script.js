var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.9094, lng: -60.9789},
      zoom: 10
    });
    
    // Making the modal and marker appear
    var markers = [];
      for(var i = 0; i < json.length; i++) {
        // Current object
        var obj = json[i];
        var Modalcontent = obj.content;
        var address = obj.title;
        var MyLatLng = new google.maps.LatLng(obj.lat,obj.lng);
      }
      
      var marker = new CustomMarker(
    		MyLatLng,
    		map,
        {
          title: address,
          content: Modalcontent,
    		}

    	);
    
    // Custom modal 
        var customModal = $('<div id="mapModal" class="modal map-modal" tabindex="-1" role="dialog" aria-labelledby="map-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ModalTitle+'</h4></div><div class="modal-body"><p>'+ModalContent+'</p></div>');
    
     $('body').append(customModal);
          $("#mapModal").modal();
          
          // Check if hotel, add class if true
    var hotel = self.args.hotel;
    //console.log(hotel);
var pulse = [];
if (hotel === true) {
    var pulse = ' current-hotel';
}
  }
  
  