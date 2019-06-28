//map code
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.9094, lng: -60.9789},
          zoom: 10
        });
      }
//end of map code


CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {

	var self = this;

	var div = this.div;

	if (!div) {

     var marker = self.args.marker;
    //console.log(marker);
var pulse = [];
if (marker === true) {
    var pulse = ' current-marker';
}

    // Create the div point
           div = this.div = $('' +
'<div class="spot'+ pulse +' map-location" data-toggle="tooltip">' +
            '<div></div>' +
            '</div>' +
            '')[0];



    // Inline styles
    div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.transform = 'translate(-50%,-100%)';

	// Custom marker data-attributes
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}

       // Add Country title
   if (typeof(self.args.title) !== 'undefined') {
      div.dataset.title = self.args.title;
    
    // Country content
    if (typeof(self.args.content) !== 'undefined') {
      div.dataset.content = self.args.content;
    
       
    // Bootstrap Modal event
		google.maps.event.addDomListener(div, "click", function(event) {
			//alert('You clicked on a custom marker!');
      var ModalTitle = self.args.title;
      var ModalContent = self.args.content;
      

//modal content
        var customModal = $('<div id="mapModal" class="modal map-modal" tabindex="-1" role="dialog" aria-labelledby="map-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ModalTitle+'</h4></div><div class="modal-body"><p>'+ModalContent+'</p></div></div></div></div></div>');
//end of modal conent
          $('body').append(customModal);
          $("#mapModal").modal(); // lanch the modal

          $('#mapModal').on('hidden.bs.modal', function (e) {
          	$(this).remove(); // destroy the modal
            //console.log("destroy modal");
      	});

      			google.maps.event.trigger(self, "click");
		});


		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}

	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

	if (point) {
		div.style.left = (point.x - 0) + 'px';
		div.style.top = (point.y - 0) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;
};

      var markers = [];
      // Looping through all the entries from the JSON data
      for(var i = 0; i < json.length; i++) {
        // Current object
        var obj = json[i];
        var Modalcontent = obj.content;
        var address = obj.title;
        var MyLatLng = new google.maps.LatLng(obj.lat,obj.lng);

        var marker = new CustomMarker(
    		MyLatLng,
    		map,
        
          title: address,
          content: Modalcontent,

    		}

    	);

     } // end loop



}



// Initialize the map
google.maps.event.addDomListener(window, 'load', initMap);

})(jQuery);
