# Saint Lucia - The Dream Destination

This project contains information about the Carribean island, St Lucia. 
The aim of this single page website was to inform users about what 
is on the island before they book the holiday/travel to the island. This website 
must sell the island, meaning the website needs to be appealing. This includes
a map of the location with markers on it and information about the hotels, 
restaurants, bars and more.

## UX
#### Surface
I started to put together mock-ups of what I would like the layout to be. Before 
creating them, I knew that the website had to be very clear and easy 
for users to follow. 
I put together two different mock-ups with two formats; mobile and 
laptop view. This was because I believe these two formats to be the ones used 
the most. The tablet format was going to be identical to the laptop version. 
All the mock-ups will help inspire the final outcome of this project. 

###### Mockup 1

[Mobile Version](https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination//master/assets/images/mockups/mobile-phone-mockup.jpg "Mobile Phone Mockup 1")

[Laptop Version](https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination/master/assets/images/mockups/laptop-mockup.jpg "Laptop Mockup 1")

###### Mockup 2

[Mobile Version](https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination/master/assets/images/mockups/mobile-phone-mockup_1.jpg "Mobile Phone Mockup 2")

[Laptop Version](https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination/master/assets/images/mockups/laptop-mockup_1.jpg "Laptop Mockup 2")


###### Mockup 3

[Mobile Version](https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination/master/assets/images/mockups/mobile-phone-mockup_2.jpg "Mobile Phone Mockup 3")

[Laptop Version](https://raw.githubusercontent.com/katerinaelsasser/st-lucia-destination/master/assets/images/mockups/laptop-mockup_2.jpg "Laptop Mockup 3")


#### Strategy
This website is to inform users about the island and what is on the island so 
that they will call the company and book a holiday through them. The information
and images of the locations must be appealing as this will help sell the holiday.
The information used on the website will be collected from a number of different 
websites, this information will be summaries and NOT copied from the companies. 

#### Structure
This website will be structured to link to the map of the island, the map will 
be near the bottom of the page with contact information of the company. There
will be sections throughout the page that will advertise a few of the hotels,
attractions and restaurants that are on the island. In these sections, there
will be a button that will take users to the map.


#### Skeleton
The map of the island will be the main focus, there will be buttons throughout 
the page that links users to the map. On the map, there will be info windows 
linked to the markers that give information about that location. For example: 
when clicking on a pin point on the map, information about that location will appear.

#### Scope
Before I started putting together the website, I had to get all the information
that I needed to put on the data file. I researched about the island and 
locations, finding information that the user would want to see on this website.
I also found images of St Lucia of the island and of specific locations that will
help sell the holiday.

#### User Stories
As a user, I want to see a map of the island.

As a user, I want a clear display and can be understood.

As a user, I want to see images of the island/locations.

As a user, I want to click on a marker and information about the location will appear.

As a user, I want to see locations of where restaurants, hotels and other locations on the map.

## Features
At the top of the website, there is a automatic slideshow displaying images of the island. This gallery will adjust to all devices.

The website has a responsive sticky navigation bar. When the user scrolls down the website, the navigation will stick to the top of the page. 
On the navigation bar, there are buttons on it that will take you to the different sections on the page. For example: the 'Hotel' button will take the user to the Hotel section on the page.

For each of the sections, there is a large image as a header with the title in the middle of it. 
Underneath the header image, there is a row of three images and text explaining different things on the island. 
For example: the attraction section, there are three different images of attractions on the island with text advertising them.
At the bottom of the section, there are buttons that will take the user to the map which is located at the bottom of the website.

At the bottom of the website, there is a map which displays the whole of the island. On the map, there are markers with custom icons. When the user clicks on the markers, there an info window appears with info about that location.

#### Existing Features
* Buttons - Throughout the page there are buttons that are linked so that when they are clicked, they will take the user to the map section on the page.
* Markers - When the user clicks the markers on the map, it will pop up with an infowindow that will have information about that location.
* Navigation - The navigation bar has nav items that are linked to the different sections of the page. For example: the nav item "Attractions" will take you to the attraction section on the page. When the page is viewed on a mobile, the navigation changes so it has a drop down feature that holds all the buttons to the sections.
* Slideshow - The slideshow automatically displays images of the island to advertise it to the user.


#### Features Left To Implement

* More data - Adding to the JSON file more locations on the island. 
* More images - Adding more images to the website of specific locations on the island like hotels.
* Switch for the markers - Adding buttons that would display specific markers on the map and hide the other markers. For example: When clicking on a marker for the restaurants, the markers for the restaurants would stay on the website and the markers for the hotels and the attractions would disappear.

## Technologies Used
* HTML
* CSS
* Javascript
* JQuery
* JSON
* [Bootstrap](https://getbootstrap.com/)
* [Bootswatch](https://bootswatch.com/yeti/)

## Testing
The user stories that I have made at the beginning will help with testing as well as being a check list.
#### Check List
#### Tests Done To Create Website
###### Map Error
1. Added the code that creates the map.
2. When refreshing the page, the map doesn't appear.
3. Check code where the error is.
4. Find I forgot to add a ';' to the end of a line.
5. I apply this.
6. Check the page, the map appears.

###### Adding a marker to the map
1. Added a small example from google to create a marker on the map
2. Loaded the page, map disappears.
3. Check the code to see where I went wrong.
4. Check the example code to see what I didn't copy across.
5. Don't notice anything, copy the code again from Google.
6. Reload the page.
7. Map doesn't appear still.
8. Look at my code again and notice I put it in the wrong section and added it to the code that created the map.
9. Moved the code onto another section.
10. Reload page, map and marker appear.

###### Changing the marker icons to all be different
1. Chose the icons that I wanted to use on the map
2. added the code of the different icons that will be used
3. create the snippet of icon code that will change the marker.
4. applied the code
5. refreshed the page
6. icons disappeared
7. checked the code to see if any of the links where incorrect (for example: the info window code said icons where as the code that links the images says 'icon', this was changed to 'icon').
8. applied this
9. refreshed the page
10. icons still are not appearing

###### Using Json file
1. Create a json file
2. Add the data on to the file by displaying it in rows (for example: name, description)
3. Add fetch code on the js file that will link to the JSON.
4. Test the code
5. Add " around the data and the title of the rows
6. Testing the code
7. Data appears on the map

## Deployment
The website was deployed from the master branch and has been hosted on the GitHub pages. When I add a new commit to this master website, it will be automatically updated.
I deployed it by doing the following steps:

1. Going on to my GitHub page
2. Clicking on the repository that I would like to deploy
3. Clicking on the tab called "Settings"
4. Scrolling all the way down to the section on settings called "GitHub Pages"
5. Clicking the dropdown button that has the title "Source"
6. Change the source from "None"to "master branch"

## How to run this project locally

## Credits
#### Content
Content has been created by myself. Info of locations for example about hotels, restaurants and activities have been inspired by information given on the websites [Tripadvisors](https://www.tripadvisor.co.uk/) and [Google](https://www.google.com/).
#### Media
All images were taken from [Pixabay](https://pixabay.com/) and [Unsplash](https://unsplash.com/).
#### Acknowledgements
Code used throughout the website has been found throughout on Bootstrap, the courses "HTML Fundamentals", "CSS Fundamentals", "User Centric Frontend Development", "Javascript Fundamentals" and "Interactive Frontend Development". 
The map code has been inspired by [Google Developers](https://developers.google.com/maps/documentation/javascript/tutorial)& 
map data - 

The gallery was inspired by the Bootstrap example called Carousel.

#### Please note that this is for educational use only.

