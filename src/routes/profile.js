const express = require('express');
const router = express.Router();
const {isLoggedIn} =    require('../lib/auth');
const profileC = require('../controllers/profileController');

router.get('/:id', isLoggedIn,profileC.getProfileFinById);
router.post('/save',isLoggedIn, profileC.save);
module.exports = router;