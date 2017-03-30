const assert = require('assert');
const InsertSpace = require('./../insert-space');

describe('Insert Space', function(){
  it('Returns space', function(){
    assert.equal(InsertSpace.space(), " ");
  });
  it('Inserts space in string', function(){
    // See?  Much cleaner
    string = `Hello,${InsertSpace.space()}world!`;
    assert.equal(string, 'Hello, world!');
  });
  // Lazy test naming, but whatever
  it('Inserts spaces in long string', function(){
    string = InsertSpace.insertSpaces('Hello,', 'world!');
    assert.equal(string, 'Hello, world!');
  });
});
