const express = require("express");
const router = express.Router();
const {getAllData,getPoliceStations, getPoliceStationReport, getStationByLocation, getCrimeType, getCrimeTypeData} = require('../controllers/dataController');

router.route('/getalldata').get(getAllData);
router.route('/policestationlist').get(getPoliceStations);
router.route('/getpolicestationreport').post(getPoliceStationReport);
router.route('/getstationbylocation').post(getStationByLocation);
router.route('/crimetype').get(getCrimeType);
router.route('/crimetypedata').post(getCrimeTypeData);

module.exports = router;