(function($) {
function CustomMarker(latlng, map, args) {
	this.latlng = latlng;
	this.args = args;
	this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {

	var self = this;

	var div = this.div;

	if (!div) {

 // Check if marker, add class if true
    var marker = self.args.marker;
    //console.log(marker);
var pulse = [];
if (marker === true) {
    var pulse = ' current-marker';
}

    // Create the div point
           div = this.div = $('' +
'<i class="material-icons">hotel</i>'+ pulse +' map-location" data-toggle="tooltip">' +
            '<div></div>' +
            '</div>' +
            '')[0];
    // Inline styles
    div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.transform = 'translate(-50%,-100%)';
     // Bootstrap Modal event
		google.maps.event.addDomListener(div, "click", function(event) {
			//alert('You clicked on a custom marker!');
      var ModalIMG = [];
      var ModalTitle = self.args.title;
      var ModalContent = self.args.content;
      var marker = self.args.marker;
    //console.log(marker);
var pulse = [];
var alert = [];
if (marker === true) {
    var pulse = ' btn-danger';
    var alert = '<div class="alert alert-danger">Emergency</div>';
} else {
  var pulse = ' btn-default';
}

//The Modal info
        var customModal = $('<div id="mapModal" class="modal map-modal" tabindex="-1" role="dialog" aria-labelledby="map-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ModalTitle+'</h4></div><div class="modal-body">'+alert+'<p>'+ModalContent+'</p></div></div></div></div></div>');

      
      
//Making the modal work      
          $('body').append(customModal);
          $("#mapModal").modal(); 
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

//Map of St Lucia
var map;
function initMap() {
  var args = {
    zoom: 10,
    center: new google.maps.LatLng(13.9094,-60.9789)
  };

  // Creating the map
     var map = new google.maps.Map(document.getElementById('map'), args);

      var markers = [];
      for(var i = 0; i < json.length; i++) {
        // Current object
        var obj = json[i];
        var Modalcontent = obj.content;
        var address = obj.title;
        var MyLatLng = new google.maps.LatLng(obj.lat,obj.lng);

        var marker = new CustomMarker(
    		MyLatLng,
    		map,
        {
      		title: address,
          content: Modalcontent,
    		}

    	);

     }
}

// Creating the map
google.maps.event.addDomListener(window, 'load', initMap);

})(jQuery);


