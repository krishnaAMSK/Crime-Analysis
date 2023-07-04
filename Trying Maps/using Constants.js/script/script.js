// THIS SCRIPT CAN BE RUN ON LOCAL MACHINE - no sql or csv is required here
// 'constants.js' is being used here

// Trichy latitude and longitude values
const lat_Trichy = 10.7905; 
const long_Trichy = 78.7047; 

// Create a Leaflet map instance
const map = L.map('map').setView([lat_Trichy, long_Trichy], 12);


// Add a tile layer to the map (Here, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);

for(let i = 0; i<CRIME_DATA.length; i++){
    const latitude = CRIME_DATA[i].lat;
    const longitude = CRIME_DATA[i].long;

    // Create a marker for the given point
    const marker = L.marker([latitude, longitude]).addTo(map);

    // Adding a popup
    // marker.bindPopup(`Amount of ganja seized: ${amount}`).openPopup();
    marker.bindPopup(`Amount of ganja seized: ${CRIME_DATA[i].amount.toFixed(3)} \n Location: ${CRIME_DATA[i].location}`);

    // Show popup on mouseover
    marker.on('mouseover', function() {
        this.openPopup();
    });
    // Hide popup on mouseout
    marker.on('mouseout', function() {
        this.closePopup();
    });

}
