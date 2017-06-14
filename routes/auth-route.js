var express = require('express');
var passport = require('passport');
var router = express.Router();
var auth = require('../controllers/auth-controller');

router.get('/basic', passport.authenticate('basic', {session: true}), auth.success);

module.exports = router;
