const mongoose = require('mongoose');

// Define the schema
const reportSchema = new mongoose.Schema({
  slNo: { type: String },
  station: { type: String },
  crimeType:{type: String},
  dateOfReport: { type: String },
  timeOfReport: { type: String },
  month: { type: String },
  placeOfOccurrence: { type: String },
  noOfAccusedArrested: { type: String},
  nameOfAccused: { type: String },
  seizedGanja: { type: String },
  seizedVehicleAndMobile: { type: String }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
