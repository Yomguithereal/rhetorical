/**
 * Rhetorical word-play/palindrome tests
 * ======================================
 *
 */
import assert from 'assert';
import palindrome from '../../src/word-play/palindrome';

describe('palindrome', function() {

  it('should correctly detect palindromes.', function() {
    assert(palindrome([1, 2, 3, 2, 1]));
    assert(!palindrome([1, 2, 3]));
  });

  it('should also work with strings.', function() {
    assert(palindrome('onno'));
    assert(palindrome('nogegon'));
    assert(palindrome('amanaplanacanalpanama'));
    assert(!palindrome('hello'));
  });
});
