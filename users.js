var express = require('express');
var router = myDataRouter.Router();
var value = 0;
/* GET users listing. */
router.get('/', function(mydata) {
  value +=1;
  res.send('User accesses are:'+ {value});
});

module.exports = router;
