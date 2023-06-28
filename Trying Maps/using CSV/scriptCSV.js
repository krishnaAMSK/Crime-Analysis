// FOR USING 'require', WE HAVE TO INTEGRATE THIS CODE IN NODEJS AND DO THE SETUP ACCORDINGLY
// Also, a local 'Police_Station_Data.csv' will not work, because CORS policy doesn't allow local file accessing
const fs = require('fs');

// Path to the CSV file
const csvFilePath = 'Path/Police_Station_Data.csv';

// Read the CSV file and extract the data
fs.readFile(csvFilePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading CSV file:', err);
        return;
    }

    const rows = data.trim().split('\n');
    const headers = rows.shift().split(',');

    const crimeData = rows.map((row) => {
        const values = row.split(',');
        const latitude = parseFloat(values[0]);
        const longitude = parseFloat(values[1]);
        const location = values[2];

        return { lat: latitude, long: longitude, location };
    });

    // ADDING THE MAP
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
    crimeData.forEach((data) => {
        const { lat, long, location } = data;

        // Create a marker for the given point
        const marker = L.marker([lat, long]).addTo(map);

        // Adding a popup
        marker.bindPopup(`Location: ${location}`);

        // Show popup on mouseover
        marker.on('mouseover', function () {
        this.openPopup();
        });

        // Hide popup on mouseout
        marker.on('mouseout', function () {
        this.closePopup();
        });
    });
  

});
