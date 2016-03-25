/**
 * Rhetorical word-play/anagram tests
 * ===================================
 *
 */
import assert from 'assert';
import anagram from '../../src/word-play/anagram';

describe('word-play/anagram', function() {

  it('should throw if too few arguments are given.', function() {
    assert.throws(function() {
      anagram('hello');
    }, /few/);
  });

  it('should correctly detect anagrams.', function() {
    assert(anagram('hello', 'llohe'));
    assert(!anagram('hello', 'goodbye'));
  });

  it('should be variadic.', function() {
    assert(anagram('hello', 'llohe', 'hello', 'heoll'));
  });
});
