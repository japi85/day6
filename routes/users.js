var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('endpoint / response');
});

router.get('/first', function(req, res, next) {
  res.send('server responds: first endpoint');
});

//middle function example (next)
router.use(function(request,response, next){

  console.log("Middle function active");
  next();
});

//param function
router.get('/second/:fname', function(request, response){
  
  console.log("Firstname= " + request.params.fname);
  response.send("Hello, " + request.params.fname);

});

//send request body and few variables
router.post('/send', function(request, response){
  
  console.log(request.body);
  console.log(request.body.fname);
  console.log(request.body.lname);
  response.send(request.body);

});

//put request with parameter id
router.put('/:id', function(request, response){
  let id = request.params.id;

  console.log("id: " + id + " Request body: " + request.body.name);
  response.send("id: " + id + " Request body: " + request.body.name);

});


module.exports = router;
