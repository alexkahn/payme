const Joi = require('joi');

module.exports = Joi.object().keys({
  cardNumber: Joi.string().creditCard(),
  cvc: Joi.number().integer().min(100).max(999),
  expiration: Joi.date().format('MM-YYYY')
});
