const express = require("express");
const router = express.Router();
const {getAllData,getPoliceStations, getPoliceStationReport, getStationByLocation} = require('../controllers/dataController');

router.route('/getalldata').get(getAllData);
router.route('/policestationlist').get(getPoliceStations);
router.route('/getpolicestationreport').post(getPoliceStationReport);
router.route('/getstationbylocation').post(getStationByLocation);

module.exports = router;