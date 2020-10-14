// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
// Assigning variable map to the object L.map() & instantiate the object with the given string 'mapid'
let map = L.map('mapid').setView([40.7, -94.5], 4);


// We create the tile layer that will be the background of our map. (code from Leaflet Quick Start Guide)
// API URL with a reference to accessToken
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map
streets.addTo(map);