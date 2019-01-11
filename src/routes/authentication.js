const express = require('express');
const router = express.Router();
const {isLoggedIn,isNotLoogedin} =    require('../lib/auth');
const authC = require('../controllers/authController');

router.get('/signup',isNotLoogedin, authC.getSignup);

router.post('/signup',isNotLoogedin,authC.setAuthetication);

router.get('/signin',authC.getSignin);

router.post('/signin',isNotLoogedin,authC.postSignin);

router.get('/profile', isLoggedIn, authC.getProfile);

router.get('/logout',authC.getLogout);

module.exports = router;