var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/validate-json', function(req, res) {
  let jsonString = req.body.json;
  console.log("recibido " + jsonString);

  try{
    let json = JSON.parse(jsonString);
    res.json({valid: true,json:json});
  }catch(e){
    res.json({valid:false,json:null})
  }


});

module.exports = router;
