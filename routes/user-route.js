var express = require('express');
var router = express.Router();
var user = require('../controllers/user-controller');

router.get('/', user.list);
router.get('/:id', user.read);
router.put('/:id', user.update);

module.exports = router;
