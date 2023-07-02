const express = require("express");
const router = express.Router();
const {getAllData,getPoliceStations} = require('../controllers/dataController');

router.route('/getalldata').get(getAllData);
router.route('/policestationlist').get(getPoliceStations);

module.exports = router;