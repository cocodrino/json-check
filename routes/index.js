var express = require('express');
var router = express.Router();
let jsonValidator = require('../util/jsonValidator');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/validate-json', function(req, res) {
  let jsonString = req.body.json;
  let result = jsonValidator.validate(jsonString);
  res.json(result);



});

module.exports = router;
