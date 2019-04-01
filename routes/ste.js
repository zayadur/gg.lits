var express = require('express');
var router = express.Router();

/* GET stream team expectations page. */
router.get('/', function(req, res, next) {
  res.render('ste', { title: 'Stream Team Expectations | Lost in the Sauce' });
});

module.exports = router;
