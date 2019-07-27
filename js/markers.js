var locations = [
    //Hotels
    ['<h2>Balenbouche Estate</h2><h4><i>Hotel</i></h4><p>This family owned Historic Plantation Guesthosue has several vacation cottages. Cottages can sleep between 2 to 6 people, some include kitchens. This destination will make you feel at home.<li>Suitable for families and couples</li><li>Free parking</li><li>Wifi</li><li>Babysitting available</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 13.7575, -61.0279],
    ['<h2>Bay Gardens Beach Resort & Spa</h2><h4><i>Hotel</i></h4><p>Stay at this inviting location to experience true adventure and relaxation.<li>Free parking</li><li>Free Wifi</li><li>Pool</li><li>Beach</li><li>Babysitting available</li><li></li>Kids club</li><li>Water park</li><li>Poolside bar</li><li>Spa</li><li>Shuttle bus service</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 14.0769, -60.9540],
    //Boucan by Hotel Chocolat
    //Calabash Cove Resort & Spa
    ['<h2>Coco Palm Resort</h2><h4><i>Hotel</i></h4><p>This award winning bouquet hotel is the perfect destination if you like classic Carribean French Creole decor.<li>Suitable for families and couples.</li><li>Free parking</li><li>Pool</li><li>Free Wifi</li><li>Poolside bar</li><li>Spa</li><li>Non-smoking hotel</li></p>', 14.0717, -60.9566],
    //Fond Doux Plantation & Resort
    //Ginger Lily Hotel
    ['<h2>Hummingbird Beach Resort</h2><h4><i>Hotel</i></h4><p>This affordable resort is perfect for nature lovers.<li>Suitable for couples and families</li><li>Free parking</li><li>Pool</li><li>Free Wifi</li><li>Beach</li><li>Babysitting available</li><li>Bar/lounge</li><li>Poolside bar</li><li>Car hire</li><li>Non-smoking hotel</li></p>', 13.8583, -61.0622],
    ['<h2>Jade Mountain Resort</h2><h4><i>Hotel</i></h4><p>This Resort is the only property with the iconic view of both the Piti and Gros Piton mountains.<li>Suitable for couples</li><li>Free parking</li><li>Free Wifi</li><li>Pool (including infinity pool)</li><li>Fitness centre (including gym)</li><li>Bar/lounge</li><li>Beach</li><li>Tennis court</li><li></li>AirportRoodtop bar</li><li>Butler service</li><li>Shuttle bus service</li><li>Spa</li></p>', 13.8646, -61.0757],
    ['<h2>Ladera Resort</h2><h4><i>Hotel</i></h4><p>Experience St Lucia with this resprt whichs is set at the edge of the rainforest, overlooking both the Carribesn sea and the Piton Mountains.<li>Suitable for couples.</li><li>Free parking</li><li>Pool (including infinity pool)</li><li>Free Wifi</li><li>Fitness centre (including gym)</li><li>Bar/lounge</li><li>Free airport transportation</li><li>Spa</li><li>Butler service</li></p>', 13.8302, -61.0515],
    //La Haut Resort
    ['<h2>Mango Beach Inn</h2><p>Hotel</p><p>This location is ideal if you are curious about history, culture and music as well as rainforest, waterfalls, beaches and nature trails.<li>Suitable for families and couples</li></p>', 13.9676, -61.0244],
    ['<h2>Marigot Bay Resort and Marina</h2><p>Hotel</p><p>At this St Lucian resort, you will experience the culture, cuisine and the traditions.<li>Suitable for couples and families.</li></p>', 13.9644, -61.0230],
    ['<h2>Marigot Beach Club & Dive Resort</h2><h4><i>Hotel</i></h4><p>Travel to this stunning and secluded location.<li>Suitable for families and couples.</li><li>Free Wifi</li><li>Pool</li><li>Beach</li><li>Pets allowed/pet friendly</li><li>Free shuttle or taxi services</li><li>Spa</li><li>Non-smoking hotel</li><li>Bar/Lounge</li><li>Babysitting available</li><li>Fitness centre (including gym)</li></p>', 13.9667, -61.0257],
    //Mystique Royal St Lucia
    //Oasis Marigot
    ['<h2>Royalton Resort & Spa</h2><h4><i>Hotel</i></h4><p>Treat yourself to this luxuarious all-inclusive resort destination which over looks the carribean sea. This resort is split into 3 sections: the resort, the Diamond Club and the (adults only) Hideaway.<li>Suitable for couples and families</li><li>Free parking</li><li>Pools (including infinity pool)</li><li>Free WIFI</li><li>Beach</li><li>Bar/Lounge</li><li>Swimup bars</li><li>Kids Club</li><li>Spa</li><li>Banquet room</li><li>Meeting rooms</li><li>Butler service</li><li>Room service</li><div class="text-center"><img class="img-fluid img-thumbnail" src="assets/images/royalton-resort-1.jpg"></div></p>', 14.0969 , -60.9498],
    ['<h2>Samfi Gardens</h2><h4><i>Hotel</i></h4><p>This is a newly established family owned property. This has 8 self-contained villas; 7 of them are called Vacation homes and 1 is called Honeymoon Suite.<li>Suitable for families and couples.</li></p>', 13.8661, -61.0517],
    ['<h2>Sandals Grande St Lucian</h2><h4><i>Hotel</i></h4><p>This resort combines historic British and French flabor into one place.<li>Suitable for couples</li><li>Free parking</li><li>Free Wifi</li><li>Pool</li><li>Fitness centre (including a gym)</li><li>Beach</li><li>Free airport transportation</li><li>Bar/lounge</li><li>Swimup bar</li><li>Free shuttle bus or taxi service</li><li>Spa</li><li>Butler service</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 14.0913, -60.9585],
    ['<h2>Sandals Halcyon Beach</h2><h4><i>Hotel</i></h4><p>Escape to this resort for a relaxing holiday.<li>Free parking</li><li>Pool (including adults only pool)</li><li>Free airport transportation</li><li>Bar/lounge</li><li>Swimup bar</li><li>Fitness centre (including gym)</li><li>Free shuttle bus or taxi services</li><li>Spa</li><li>Butler service</li><li>Laundry service</li></p>', 14.0318, -60.9772],
    ['<h2>Starfish St. Lucia</h2><p>Hotel</p><p>This tropical escape is ideal if you love white sand beaches and crystal clear water.<li>Suitable for families and couples.</li></p>', 14.0717, -60.9566],
    //Stonefield Villa Resort
    ['<h2>Sugar Beach, A Viceroy Resort</h2><h4><i>Hotel</i></h4><p>If you love white sand beaches, this is the hotel for you. Relax at the ultimate vacation experience.<li>Suiable for families and couple</li><li>Free parking</li><li>Pool</li><li>Bar/lounge</li><li>Fitness centre (including gym)</li><li>Babysitting available</li><li>Beach</li></p>', 13.8278, -61.0612],
    ['<h2>St James Club Morgan Bay</h2><h4><i>Hotel</i></h4><p>This relaxing location for everyone. This is an all inclusive which includes meals and beverages.<li>Suitable for families and couples</li><li>Free parking</li><li>Pool (including adults only pool)</li><li>Spa</li><li>Free Wifi</li><li>Fitness Centre (including gym)</li><li>Tennis court</li><li>Beach</li><li>Babysitting available</li><li>Bar/lounge</li><li>Swimup bars</li><li>Kids Club</li><li>Shuttle bus service</li><li>Airport transportation</li><li>Meeting rooms</li><li>Housekeeping service</li></p>', 14.0406, -60.9706],
    ['<h2>Têt Rouge Resort</h2><h4><i>Hotel</i></h4><p>This villa is the perfect getaway for all. With 6 sea-view studios featuring a specious terrace looking on to the blue Carribean. This is located near the Gros Piton.<li>Suitable for couples.</li><li>Free parking</li><li>Pool (including infinity pool)</li><li>Beach</li><li>Free Wifi</li><li>Bar/lounge</li><li>Swimup bar</li><li>Shuttle bus service</li><li>Ocean view</li></p>', 13.7931, -61.0625],
    //Ti kaye Resort & Spa
    ['<h2>The Harbor Club</h2><h4><i>Hotel</i></h4><p>Part of the Hilton collection. Experience the tropical beauty and the maritime charm.<li>Suitable for families and couples.</li></p>', 14.0731, -60.9476],
    ['<h2>Windjammer Landing Villa Beach Resort</h2><h4><i>Hotel</i></h4><p>Have a unforgettanle Carribean experience with this resort, with breathtaking views.<li>Free parking</li><li>Pool</li><li>Fitness centre (including a gym)</li><li>Babysitting available</li><li>Poolside bar</li><li>Kids club</li><li>Free shuttle bus or taxi services</li><li></li></p>', 14.0589, -60.9742],


    //Resturant
    //The Cluff At Cap
    //Big Chef Steakhouse
    //Rainforest Hideaway
    //Dasheene
    //Boucan
    //The Coal Pit
    //Fox Grove Inn
    //Flavours of the Grill
  ];