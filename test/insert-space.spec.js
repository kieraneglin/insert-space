const assert = require('assert');
const InsertSpace = require('./../insert-space');

describe('Insert Space', function(){
  it('Inserts space', function(){
    assert.equal(InsertSpace.space(), " ");
  });
});
