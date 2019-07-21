 //code for creating the map
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: {lat: 13.9094, lng: -60.9789}
            });

                var infobox = new InfoBox({
                 content: document.getElementById("infobox"),
                 disableAutoPan: false,
                 maxWidth: 150,
                 pixelOffset: new google.maps.Size(-140, 0),
                 zIndex: null,
                 boxStyle: {
                    background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
                    opacity: 0.90,
                    width: "300px"
                },
                closeBoxMargin: "12px 4px 2px 2px",
                closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                infoBoxClearance: new google.maps.Size(1, 1)
            });
            
            google.maps.event.addListener(marker, 'click', function() {
                infobox.open(map, this);
                map.panTo(lat_lng);
            });
        }