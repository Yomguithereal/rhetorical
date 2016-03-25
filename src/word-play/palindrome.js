/**
 * Rhetorical word-play/palindrome
 * ================================
 *
 * Functions related to palindromes.
 */
import {seq} from 'talisman/helpers';

/**
 * Function detecting whether the given sequence is a palindrome.
 *
 * @param  {mixed} sequence - The sequence to process.
 * @return {boolean}        - Whether the given sequence is a palindrome.
 *
 * @example
 *   // anagram('nogegon')   => true
 *   // anagram('hello')     => false
 */
export default function palindrome(sequence) {

  // Handling strings
  sequence = seq(sequence);

  const length = sequence.length;

  for (let i = 0, l = (length / 2) | 0; i < l; i++) {
    if (sequence[i] !== sequence[length - i - 1])
      return false;
  }

  return true;
}
