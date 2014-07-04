var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/change', function(req, res) {
  res.send('changed on git added on master only');
});
module.exports = router;
