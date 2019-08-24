  
  
  
var locations = [
//Airports
    ['George F L Charles Airport','<h2>George F L Charles Airport</h2><h4><i>Airport</i></h4>', 14.0200, -60.9931, 'airport'],
    ['Hewanorra International Airport','<h2>Hewanorra International Airport</h2><h4><i>Airport</i></h4>', 13.7334, -60.9503, 'airport'],

//Attractions
//  ['<h2>Diamond Botinical Gardens</h2><h4><i>Attraction</i></h4><p>Explore this magical location where a majestic waterfall stands, one of the most popular tourist attractions on the island. This location is both a historic and naturally beautiful site.</p>', 13.8524, -61.0483, 'attraction'],
//  ['<h2>La Soufriere</h2><h4><i>Attraction</i></h4><p></p>', 13.3333, -61.1833, 'attraction'],
//  ['<h2>Mamiku Gardens</h2><h4><i>Attraction</i></h4><p></p>', 13.8688, -60.9015, 'attraction'],
//  ['<h2>Marigot Bay</h2><h4><i>Attraction</i></h4><p></p>', 13.9663, -61.0275, 'attraction'],
//  ['<h2>Mount Gumie</h2><h4><i>Attraction</i></h4><p></p>', 13.8452, -60.9989, 'attraction'],
//  ['<h2>Petit Piton</h2><h4><i>Attraction</i></h4><p>This attraction was built in the 18th century by the British. Explore the ruins of Fort Rodney. It was converted to a US signal station in World War 2.</p>', 13.8333, -61.0667, 'attraction'],
//  ['<h2>Pigeon Island</h2><h4><i>Attraction</i></h4><p></p>', 14.0931, -60.9646, 'attraction'],

  //Rainforest Adverntures Aerial Tram & Zip-Line
    
//  ['<h2>Rodney Bay</h2><h4><i>Attraction</i></h4><p></p>', 14.0814, -60.9627, 'attraction'],
//  ['<h2>Soufriere Drive In Volcano</h2><h4><i>Attraction</i></h4><p></p>', 13.8389, -61.0460, 'attraction'],
//  ['<h2>Sulphur Springs</h2><h4><i>Attraction</i></h4><p></p>', 13.8380, -61.0464, 'attraction'],
//  ['<h2>The Tet Paul Nature Trail</h2><h4><i>Attraction</i></h4><p></p>', 13.8201, -61.0553, 'attraction'],
//  ['<h2>Treetop Adventure Park</h2><h4><i>Attraction</i></h4><p></p>', 13.9006, -60.9242, 'attraction'],
//  ['<h2>Vigie Beach</h2><h4><i>Attraction</i></h4><p></p>', 14.0249, -60.9846, 'attraction'],
  
  
  

//Beaches
//  ['<h2>Reduit Beach</h2><h4><i>Beach</i></h4><p>This beach has more than a mile of fine golden sand with lovely views across the bay to Pigeon Island</p>', 14.0746, -60.9554],
//  ['<h2>Anse Cochon</h2><h4><i>Beach</i></h4><p>This is located down the west coast of the island, between the CAstries and Soufriere. This has 200 metres of dark sand.</p>', 13.9271, -61.0581],
//  ['<h2>Anse Chastanet</h2><h4><i>Beach</i></h4><p>This has 150 metres of dark, silver sand.</p>', 13.8649, -61.0778],

//Hotels
//  ['<h2>Balenbouche Estate</h2><h4><i>Hotel</i></h4><p>This family owned Historic Plantation Guesthosue has several vacation cottages. Cottages can sleep between 2 to 6 people, some include kitchens. This destination will make you feel at home.<li>Suitable for families and couples</li><li>Free parking</li><li>Wifi</li><li>Babysitting available</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 13.7575, -61.0279, 'hotel'],
//  ['<h2>Bay Gardens Beach Resort & Spa</h2><h4><i>Hotel</i></h4><p>Stay at this inviting location to experience true adventure and relaxation.<li>Free parking</li><li>Free Wifi</li><li>Pool</li><li>Beach</li><li>Babysitting available</li><li></li>Kids club</li><li>Water park</li><li>Poolside bar</li><li>Spa</li><li>Shuttle bus service</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 14.0769, -60.9540, 'hotel'],
//  ['<h2>Boucan By Hotel Chocolat</h2><h4><i>Hotel</i></h4><p>Located in the hills near Soufriere, this hotel will stun you with the views of the Piton mountains.<li>Suitable for families and couples</li><li>Free parking</li><li>Pool (including infinity pool)</li><li>Free Wifi</li><li>Free shuttle bus and taxi services</li><li>Bar/lounge</li><li>Poolside bar</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 13.8332, -61.0503, 'hotel'],
//  ['<h2>Calabash Cove Resort & Spa</h2><h4><i>Hotel</i></h4><p>Nested in the sheltered bay of Bonaire Estate, this hotel is one of just a select few full service, bouquet luxary resorts on the island.<li>Suitable for families and couples</li><li>Free parking</li><li>Fitness Centre (Including gym)</li><li>Pool (including infinity pool and adults only pool)</li><li>Free Wifi</li><li>Poolside bar</li><li>Spa</li><li>Laundry service</li></p>', 14.0504, -60.9727, 'hotel'],
//  ['<h2>Coco Palm Resort</h2><h4><i>Hotel</i></h4><p>This award winning bouquet hotel is the perfect destination if you like classic Carribean French Creole decor.<li>Suitable for families and couples.</li><li>Free parking</li><li>Pool</li><li>Free Wifi</li><li>Poolside bar</li><li>Spa</li><li>Non-smoking hotel</li></p>', 14.0717, -60.9566, 'hotel'],
//  ['<h2>Fond Doux Plantation & Resort</h2><h4><i>Hotel</i></h4><p>If you want a romantic, intimate holiday, this location is the one for you. This has 15 private luxury cottages, two on-site restuarants, and a collage of outdoor swimming pools.<li>Suitable for families and couples</li><li>Free Wifi</li><li>Pool</li><li>Bar/lounge</li><li>Evening entertainment</li><li>Shuttle bus service</li><li>Spa</li></p>', 13.8220, -61.0502, 'hotel'],
//  ['<h2>Ginger Lily Hotel</h2><h4><i>Hotel</i></h4><p>Escape to this family owned boutique hotel, which is moments away from Reduit Beach.<li>Free parking</li><li>Free Wifi</li><li>Pool</li><li>Bar/lounge</li><li>Airport transportation</li></p>', 14.0755, -60.9533, 'hotel'],
//  ['<h2>Hummingbird Beach Resort</h2><h4><i>Hotel</i></h4><p>This affordable resort is perfect for nature lovers.<li>Suitable for couples and families</li><li>Free parking</li><li>Pool</li><li>Free Wifi</li><li>Beach</li><li>Babysitting available</li><li>Bar/lounge</li><li>Poolside bar</li><li>Car hire</li><li>Non-smoking hotel</li></p>', 13.8583, -61.0622, 'hotel'],
//  ['<h2>Jade Mountain Resort</h2><h4><i>Hotel</i></h4><p>This Resort is the only property with the iconic view of both the Piti and Gros Piton mountains.<li>Suitable for couples</li><li>Free parking</li><li>Free Wifi</li><li>Pool (including infinity pool)</li><li>Fitness centre (including gym)</li><li>Bar/lounge</li><li>Beach</li><li>Tennis court</li><li></li>AirportRoodtop bar</li><li>Butler service</li><li>Shuttle bus service</li><li>Spa</li></p>', 13.8646, -61.0757, 'hotel'],
//  ['<h2>Ladera Resort</h2><h4><i>Hotel</i></h4><p>Experience St Lucia with this resprt whichs is set at the edge of the rainforest, overlooking both the Carribesn sea and the Piton Mountains.<li>Suitable for couples.</li><li>Free parking</li><li>Pool (including infinity pool)</li><li>Free Wifi</li><li>Fitness centre (including gym)</li><li>Bar/lounge</li><li>Free airport transportation</li><li>Spa</li><li>Butler service</li></p>', 13.8302, -61.0515, 'hotel'],
//  ['<h2>La Haut Resort</h2><h4><i>Hotel</i></h4><p>This hotel sits overlooking Soufriere, one of the oldest towns on the island.<li>Free parking</li><li>Free Wifi</li><li>Pool (including infinity pool)<li>Non-smoking hotel</li><li>Game room</li><li>Bar/lounge</li></p>', 13.8635, -61.0536, 'hotel'],
//  ['<h2>Mango Beach Inn</h2><p>Hotel</p><p>This location is ideal if you are curious about history, culture and music as well as rainforest, waterfalls, beaches and nature trails.<li>Suitable for families and couples</li></p>', 13.9676, -61.0244, 'hotel'],
//  ['<h2>Marigot Bay Resort and Marina</h2><p>Hotel</p><p>At this St Lucian resort, you will experience the culture, cuisine and the traditions.<li>Suitable for couples and families.</li></p>', 13.9644, -61.0230, 'hotel'],
//  ['<h2>Marigot Beach Club & Dive Resort</h2><h4><i>Hotel</i></h4><p>Travel to this stunning and secluded location.<li>Suitable for families and couples.</li><li>Free Wifi</li><li>Pool</li><li>Beach</li><li>Pets allowed/pet friendly</li><li>Free shuttle or taxi services</li><li>Spa</li><li>Non-smoking hotel</li><li>Bar/Lounge</li><li>Babysitting available</li><li>Fitness centre (including gym)</li></p>', 13.9667, -61.0257, 'hotel'],
//  ['<h2>Oasis Marigot</h2><h4><i>Hotel</i></h4><p>Relax at this hotel which offers travellers the ideal holiday for a peaceful break.<li>Free parking</li><li>Free wifi</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 13.9678, -61.0262, 'hotel'],
//  ['<h2>Royalton Resort & Spa</h2><h4><i>Hotel</i></h4><p>Treat yourself to this luxuarious all-inclusive resort destination which over looks the carribean sea. This resort is split into 3 sections: the resort, the Diamond Club and the (adults only) Hideaway.<li>Suitable for couples and families</li><li>Free parking</li><li>Pools (including infinity pool)</li><li>Free WIFI</li><li>Beach</li><li>Bar/Lounge</li><li>Swimup bars</li><li>Kids Club</li><li>Spa</li><li>Banquet room</li><li>Meeting rooms</li><li>Butler service</li><li>Room service</li><div class="text-center"><img class="img-fluid img-thumbnail" src="assets/images/royalton-resort-1.jpg"></div></p>', 14.0969 , -60.9498, 'hotel'],
//  ['<h2>Samfi Gardens</h2><h4><i>Hotel</i></h4><p>This is a newly established family owned property. This has 8 self-contained villas; 7 of them are called Vacation homes and 1 is called Honeymoon Suite.<li>Suitable for families and couples.</li></p>', 13.8661, -61.0517, 'hotel'],
//  ['<h2>Sandals Grande St Lucian</h2><h4><i>Hotel</i></h4><p>This resort combines historic British and French flabor into one place.<li>Suitable for couples</li><li>Free parking</li><li>Free Wifi</li><li>Pool</li><li>Fitness centre (including a gym)</li><li>Beach</li><li>Free airport transportation</li><li>Bar/lounge</li><li>Swimup bar</li><li>Free shuttle bus or taxi service</li><li>Spa</li><li>Butler service</li><li>Non-smoking hotel</li><li>Laundry service</li></p>', 14.0913, -60.9585, 'hotel'],
//  ['<h2>Sandals Halcyon Beach</h2><h4><i>Hotel</i></h4><p>Escape to this resort for a relaxing holiday.<li>Free parking</li><li>Pool (including adults only pool)</li><li>Free airport transportation</li><li>Bar/lounge</li><li>Swimup bar</li><li>Fitness centre (including gym)</li><li>Free shuttle bus or taxi services</li><li>Spa</li><li>Butler service</li><li>Laundry service</li></p>', 14.0318, -60.9772, 'hotel'],
//  ['<h2>Starfish St. Lucia</h2><h4><i>Hotel</i></h4><p>This tropical escape is ideal if you love white sand beaches and crystal clear water.<li>Suitable for families and couples.</li></p>', 14.0717, -60.9566, 'hotel'],
//  ['<h2>Stonefield Villa Resort</h2><h4><i>Hotel</i></h4><p>This secluded location is ideal for all travellers.<li>Free parking</li><li>Free wifi</li>Pool</li><li>Fitness centre (including a gym)</li><li>Bar/lounge</li><li>Spa</li><li>Non smoking hotel</li></p>', 13.8445, -61.0598, 'hotel'],
//  ['<h2>Sugar Beach, A Viceroy Resort</h2><h4><i>Hotel</i></h4><p>If you love white sand beaches, this is the hotel for you. Relax at the ultimate vacation experience.<li>Suiable for families and couple</li><li>Free parking</li><li>Pool</li><li>Bar/lounge</li><li>Fitness centre (including gym)</li><li>Babysitting available</li><li>Beach</li></p>', 13.8445, -61.0598, 'hotel'],
//  ['<h2>St James Club Morgan Bay</h2><h4><i>Hotel</i></h4><p>This relaxing location for everyone. This is an all inclusive which includes meals and beverages.<li>Suitable for families and couples</li><li>Free parking</li><li>Pool (including adults only pool)</li><li>Spa</li><li>Free Wifi</li><li>Fitness Centre (including gym)</li><li>Tennis court</li><li>Beach</li><li>Babysitting available</li><li>Bar/lounge</li><li>Swimup bars</li><li>Kids Club</li><li>Shuttle bus service</li><li>Airport transportation</li><li>Meeting rooms</li><li>Housekeeping service</li></p>', 14.0406, -60.9706, 'hotel'],
//  ['<h2>Têt Rouge Resort</h2><h4><i>Hotel</i></h4><p>This villa is the perfect getaway for all. With 6 sea-view studios featuring a specious terrace looking on to the blue Carribean. This is located near the Gros Piton.<li>Suitable for couples.</li><li>Free parking</li><li>Pool (including infinity pool)</li><li>Beach</li><li>Free Wifi</li><li>Bar/lounge</li><li>Swimup bar</li><li>Shuttle bus service</li><li>Ocean view</li></p>', 13.7931, -61.0625, 'hotel'],
//  ['<h2>Ti Kaye Resort & Spa</h2><h4><i>Hotel</i></h4><p>This resort is located on the serene West Coast. This is the best place for a romantic relaxation.<li>Free parking</li><li>Free wifi</li><li>Beach</li><li>Pool (including adult only pool)</li><li>Spa</li><li>Laundry service</li><li>Bar/lounge</li></p>', 13.9261, -61.0572, 'hotel'],
//  ['<h2>The Harbor Club</h2><h4><i>Hotel</i></h4><p>Part of the Hilton collection. Experience the tropical beauty and the maritime charm.<li>Suitable for families and couples.</li></p>', 14.0731, -60.9476, 'hotel'],
//  ['<h2>Windjammer Landing Villa Beach Resort</h2><h4><i>Hotel</i></h4><p>Have a unforgettanle Carribean experience with this resort, with breathtaking views.<li>Free parking</li><li>Pool</li><li>Fitness centre (including a gym)</li><li>Babysitting available</li><li>Poolside bar</li><li>Kids club</li><li>Free shuttle bus or taxi services</li><li></li></p>', 14.0589, -60.9742, 'hotel'],

//Restaurants
//    ['<h2>Bamboo</h2><h4><i>Resturant</i></h4><p></p>', 13.8218, -61.0500, 'restaurant'],
//    ['<h2>Big Chef Steakhouse</h2><h4><i>Resturant</i></h4><p></p>', 14.0700, -60.9538, 'restaurant'],
//    ['<h2>Blue Olive Resturant & Wine Bar</h2><h4><i>Resturant</i></h4><p></p>', 14.0715, -60.9550, 'restaurant'],
//    ['<h2>Buzz Seafood & Grill</h2><h4><i>Resturant</i></h4><p></p>', 14.0751, -60.9537, 'restaurant'],
//    ['<h2>Cafe Ole</h2><h4><i>Resturant</i></h4><p></p>', 14.0753, -60.9478, 'restaurant'],
//    ['<h2>Chateau Mygo</h2><h4><i>Resturant</i></h4><p></p>', 13.9652, -61.0249, 'restaurant'],
//    ['<h2>Flavours of the Grill</h2><h4><i>Resturant</i></h4><p></p>', 14.0544, -60.9641, 'restaurant'],
//    ['<h2>Fox Grove Inn</h2><h4><i>Resturant</i></h4><p></p>', 13.8628, -60.9062, 'restaurant'],
//    ['<h2>Golden Taste</h2><h4><i>Resturant</i></h4><p></p>', 14.0809, -60.9535, 'restaurant'],
    //Gros Islet Fish Fry
//    ['<h2>Island Breeze</h2><h4><i>Resturant</i></h4><p></p>', 13.7311, -60.9409, 'restaurant'],
//    ['<h2>Jacques Waterfront Dining</h2><h4><i>Resturant</i></h4><p></p>', 14.0727, -60.9540, 'restaurant'],
//    ['<h2>Jambe De Bois Resturant & Bar</h2><h4><i>Resturant</i></h4><p></p>', 14.0918, -60.9647, 'restaurant'],
//    ['<h2>Juliettas Restaurant & Bar</h2><h4><i>Resturant</i></h4><p></p>', 13.9638, -61.0193, 'restaurant'],
//    ['<h2>La Terrasse</h2><h4><i>Resturant</i></h4><p></p>', 14.0709, -60.9544, 'restaurant'],
//    ['<h2>Maries Local Cuisine</h2><h4><i>Resturant</i></h4><p></p>', 13.8521, -61.0473, 'restaurant'],
//    ['<h2>Marthas Tables</h2><h4><i>Resturant</i></h4><p></p>', 13.8401, -61.0617, 'restaurant'],
//    ['<h2>Masala Bay</h2><h4><i>Resturant</i></h4><p></p>', 13.9653, -61.0242, 'restaurant'],
//    ['<h2>Naked fisherman restaurant</h2><h4><i>Resturant</i></h4><p></p>', 14.1005, -60.9500, 'restaurant'],
//    ['<h2>Orlandos</h2><h4><i>Resturant</i></h4><p></p>', 13.8577, -61.0612, 'restaurant'],
//    ['<h2>Petit Peak Restaurant</h2><h4><i>Resturant</i></h4><p></p>', 13.8218, -61.0500, 'restaurant'],
//    ['<h2>Pink Plantation House</h2><h4><i>Resturant</i></h4><p></p>', 13.9981, -60.9932, 'restaurant'],
//    ['<h2>Razmataz</h2><h4><i>Resturant</i></h4><p></p>', 14.0740, -60.9544, 'restaurant'],
//    ['<h2>Rituals Coffee</h2><h4><i>Resturant</i></h4><p></p>', 14.0329, -60.9681, 'restaurant'],
//    ['<h2>Spice of India</h2><h4><i>Resturant</i></h4><p></p>', 14.0699, -60.9544, 'restaurant'],
//    ['<h2>The Cliff At Cap</h2><h4><i>Resturant</i></h4><p></p>', 14.0996, -60.9512, 'restaurant'],
//    ['<h2>The Coal Pot</h2><h4><i>Resturant</i></h4><p></p>', 14.0172, -60.9964, 'restaurant'],
//    ['<h2>Rainforest Hideaway</h2><h4><i>Resturant</i></h4><p></p>', 13.9672, -61.0242, 'restaurant'],
  ];