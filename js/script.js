var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 13.9094, lng: -60.9789},
      zoom: 10
    });
    
    // Custom modal 
        var customModal = $('<div id="mapModal" class="modal map-modal" tabindex="-1" role="dialog" aria-labelledby="map-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ModalTitle+'</h4></div><div class="modal-body">'+alert+'<img src="'+ModalIMG+'"><p>'+ModalContent+'</p><a class="btn'+pulse+' btn-sm" href="'+ModalURL+'">Learn More</a></div></div></div></div></div>');
    
     $('body').append(customModal);
          $("#mapModal").modal();
  }