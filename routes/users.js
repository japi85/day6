var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('endpoint / response');
});

router.get('/first', function(req, res, next) {
  res.send('server responds: endpoint eka');
});

//
router.get('/second/:fname', function(request, response){
  
  console.log("Firstname= " + request.params.fname);
  response.send("Hello, " + request.params.fname);

});
module.exports = router;
