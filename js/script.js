
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

 // Check if emergency, add class if true
    var emergency = self.args.emergency;
    //console.log(emergency);
var pulse = [];
if (emergency === true) {
    var pulse = ' current-emergency';
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

    // Check if Emergency
   if (typeof(self.args.emergency) !== 'undefined') {
    div.dataset.emergency = self.args.emergency;
  }

    // Add Country title
   if (typeof(self.args.title) !== 'undefined') {
      div.dataset.title = self.args.title;
    }
    // Country content
    if (typeof(self.args.content) !== 'undefined') {
      div.dataset.content = self.args.content;
    }
   // Country URL
    if (typeof(self.args.url) !== 'undefined') {
      div.dataset.url = self.args.url;
    }
       // Country IMage
    if (typeof(self.args.img) !== 'undefined') {
      div.dataset.img = self.args.img;
    }

    // Bootstrap Modal event
		google.maps.event.addDomListener(div, "click", function(event) {
			//alert('You clicked on a custom marker!');
      var ModalIMG = [];
      var ModalTitle = self.args.title;
      var ModalContent = self.args.content;
      var emergency = self.args.emergency;
    //console.log(emergency);
var pulse = [];
var alert = [];
if (emergency === true) {
    var pulse = ' btn-danger';
    var alert = '<div class="alert alert-danger">Emergency</div>';
} else {
  var pulse = ' btn-default';
}


        var customModal = $('<div id="mapModal" class="modal map-modal" tabindex="-1" role="dialog" aria-labelledby="map-modal" aria-hidden="true"><div class="vertical-alignment-helper"><div class="modal-dialog vertical-align-center modal-sm"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">'+ModalTitle+'</h4></div><div class="modal-body">'+alert+'<img src="'+ModalIMG+'"><p>'+ModalContent+'</p><a class="btn'+pulse+' btn-sm" href="'+ModalURL+'">Learn More</a></div></div></div></div></div>');

          $('body').append(customModal);
          $("#mapModal").modal(); // lanch the modal

          $('#mapModal').on('hidden.bs.modal', function (e) {
          	$(this).remove(); // destroy the modal
            //console.log("destroy modal");
      	});

      console.log("You clicked on: " + ModalTitle + "");
            console.log("The link is: " + ModalURL + "");
           console.log("The img is: " + ModalIMG + "");

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
        var emergency = obj.emergency;
        var address = obj.title;
        var url = obj.url;
        var img = obj.img;
        var MyLatLng = new google.maps.LatLng(obj.lat,obj.lng);

        var marker = new CustomMarker(
    		MyLatLng,
    		map,
        {
      		emergency: emergency,
          title: address,
          content: Modalcontent,
          url: url,
          img: img
    		}

    	);

     } // end loop



}




var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 13.9094, lng:-60.9789},
          zoom: 10
        });
      }