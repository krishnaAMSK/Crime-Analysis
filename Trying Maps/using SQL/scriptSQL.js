// THIS SCRIPT CAN BE USED WITH SQL Table named 'crime_data'
const query = 'SELECT lat, long, location amount FROM crime_data;';

// Trichy latitude and longitude values
const lat_Trichy = 10.7905; 
const long_Trichy = 78.7047; 

// Create a Leaflet map instance
const map = L.map('map').setView([lat_Trichy, long_Trichy], 13);

// Add a tile layer to the map (Here, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);


// Populating the map with data
for (let i = 0; i < rows.length; i++) {
    const latitude = rows[i].lat;
    const longitude = rows[i].long;
  
    // Create a marker for the given point
    const marker = L.marker([latitude, longitude]).addTo(map);
  
    // Adding a popup
    const location = rows[i].location;
    const amount = rows[i].amount;
    marker.bindPopup(`Amount of ganja seized: ${amount}\nLocation: ${location}`);
  
    // Show popup on mouseover
    marker.on('mouseover', function () {
      this.openPopup();
    });
    // Hide popup on mouseout
    marker.on('mouseout', function () {
      this.closePopup();
    });
}
  
