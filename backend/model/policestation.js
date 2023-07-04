const mongoose = require('mongoose');

// Define the schema
const policestationSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  lat: { type: String },
  long: { type: String }
  
});

const policestation = mongoose.model('policestation', policestationSchema);

module.exports = policestation;