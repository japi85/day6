var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('endpoint / response');
});

router.get('/first', function(req, res, next) {
  res.send('server responds: first endpoint');
});

//
router.get('/second/:fname', function(request, response){
  
  console.log("Firstname= " + request.params.fname);
  response.send("Hello, " + request.params.fname);

});

router.post('/send', function(request, response){
  
  console.log(request.body);
  console.log(request.body.fname);
  console.log(request.body.lname);
  response.send(request.body);

});
module.exports = router;
