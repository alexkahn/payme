// credit card numbers
// 49927398716
// 49927398717
// 1234567812345678
// 1234567812345670

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('formId');
  form.addEventListener('submit', function submitHandler(event) {
    event.preventDefault();
    console.log(event);
    var formEl = document.getElementById('formId');
    var data = new FormData(formEl);
    console.log(data);
    var req = new XMLHttpRequest();
    req.addEventListener('load', function () {
      var res = JSON.parse(this.responseText);
      if (res.statusCode >= 200 && res.statusCode < 400) {
        // make a happy message/ alert
        // create a DOCUMENT FRAGMENT
        var frag = document.createDocumentFragment();
        var document.createElement('div');
      }
      console.log(this.responseText);
    });
    req.open('POST', 'http://localhost:3000/transactions');
    req.send(data);
  });
});

function luhnChecksum(cardNumber) {
  /*
     Function that performs Luhn's mod 10 algorithm for checking the validity of a
     credit card number after some basic input sanitizing. Returns the checksum
     mod 10.
     @param: cardNumber, String
  */
  var digits = enumerate(cardNumber).reverse();
  digits = digits.map(function(el, i) {
    if ((i + 1) % 2 === 0) {
      return 2 * el > 9 ? enumerate(2*el).reduce(sum) : 2*el;
    } else {
      return el;
    }
  });
  return digits.reduce(sum) % 10;
}

function enumerate(n) {
  /*
     Function to enumerate a string of numbers.
     @param: n, a string that can be coerced into an array of numbers
     Input ex: "123423456780"
    Output: [1,2,3,4,2,3,4,5,6,7,8,0]
  */
  var numer;
  if (typeof n === 'string') {
    numer = n.split('');
    return numer.map(function(n) {
      if (Number(n)) {
        return Number(n);
      } else {
        throw new Error ('input invalid');
      }
    });
  } else {
    numer = n.toString();
    return numer.split('').map(function(n) {
      return Number(n);
    });
  }
}

function isValidCard(cardNumber) {
  /*
   Boolean function that calls Luhn's algorithm after doing some
   naive input sanitization.
   @param: cardNumber, String
   Input: Some string, hopefully something that resembles a credit card number.
   Output: true || false
  */
  cardNumber = cardNumber.trim().replace(/[\.,\-\s]/g, '');
  return luhnChecksum(cardNumber) === 0;
}

function sum(n, N) {
  /*
  Helper function for using within reduce Array method
  See: Array.prototype.reduce for more information
  */
  return n + N;
}
