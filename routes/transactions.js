var express = require('express');
var router = express.Router();

const schema = require('../lib/cardSchema');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function validate(req, res, next) {
  schema.validate(req.body, function (err, value) {
    if (err) {
      console.log(err);
      return res.send(err);
    } else {
      console.log(value);
      return next();
    }
  });
}

router.post('/', validate, function(req, res, next) {
  return Math.random() * 100 < 70 ? res.send({'message': 'Success!'}) : res.send({'message': 'failure'});
});

module.exports = router;
