const express = require('express');
const router = express.Router();
const {isLoggedIn} =    require('../lib/auth');
const linksC = require('../controllers/linksController');

router.get('/add', isLoggedIn,linksC.getAdd);

router.post('/add',isLoggedIn, linksC.save);

router.get('/',isLoggedIn, linksC.getLinks);

router.get('/delete/:id',isLoggedIn, linksC.delete);

router.get('/edit/:id',isLoggedIn, linksC.getLinksFinById);


router.post('/edit/:id', isLoggedIn, linksC.update);

module.exports = router;