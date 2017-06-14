var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require('../controllers/auth-controller');
var config = require('../config').auth.facebook

router.get('/facebook', passport.authenticate('facebook', config.options.scope));
router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/'}))

router.get('/facebook-token', passport.authenticate('facebook-token'), auth.success);
router.get('/basic', passport.authenticate('basic', {session: true}), auth.success);

module.exports = router;
