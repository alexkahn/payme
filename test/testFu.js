const chai = require('chai');
const expect = chai.expect;


describe('The truth', function () {
  it('never is false', function () {
    expect(true).to.be.true;
  });

  it('is not an object', function () {
    expect(true instanceof Object).to.be.false;
  });

  it('is like one', function () {
    expect(true == 1).to.be.true;
  });
});
