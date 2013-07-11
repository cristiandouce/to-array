var toArray = require('..');

describe('to-array', function() {
  it('should work with function arguments', function(done) {
    (function() {
      toArray(arguments).should.eql([4,2]);
      done();
    })(4,2);
  });
});