const express = require('express');

const router = express.Router();

const { registerAdmin, loginAdmin,logoutAdmin, getAdminProfile, updatePassword}  = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');

router.route('/register').post(registerAdmin);
router.route('/login').post(loginAdmin);
router.route('/profile').post(isAuthenticated,getAdminProfile);
router.route('/logout').post(isAuthenticated,logoutAdmin);
router.route('/password/update').put(isAuthenticated,updatePassword);
       
module.exports= router;