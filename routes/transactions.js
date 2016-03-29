var express = require('express');
var router = express.Router();

const schema = require('../lib/cardSchema');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  schema.validate(req.body, function(err, value) {
    if (err) {
      return res.send(err);
    }
    return res.send('respond with a resource');
  })
});

module.exports = router;
