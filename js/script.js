CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.width = '20px';
		div.style.height = '20px';
		div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {			
			google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = point.x + 'px';
		div.style.top = point.y + 'px';
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

//initialising the map

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.9094, lng: -60.9789},
          zoom: 10
        });

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	var overlay = new CustomMarker(
		myLatlng, 
		map,
		{}
	);
}
//the modal for the info window
 var customModal = $('<div id="mapModal" class="modal map-modal" tabindex="-1" role="dialog" aria-labelledby="map-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ModalTitle+'</h4></div><div class="modal-body">'+'<p>'+ModalContent+'</p><a class="btn'+'</a></div></div></div></div></div>');

          $('body').append(customModal);
          $("#mapModal").modal(); // lanch the modal

          $('#mapModal').on('hidden.bs.modal', function (e) {
          	$(this).remove(); // destroy the modal
          });
//marker
var markers = [];
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        var Modalcontent = obj.content;
        var address = obj.title;
        var MyLatLng = new google.maps.LatLng(obj.lat,obj.lng);
        
google.maps.event.addDomListener(div, "click", function(event) {
      var ModalIMG = [];
      var ModalTitle = self.args.title;
      var ModalContent = self.args.content;
    }
    
var marker = new CustomMarker(
    		MyLatLng,
    		map,
        {
          title: address,
          content: Modalcontent,
    		}

    	);
    	google.maps.event.addDomListener(window, 'load', initMap);
}
   