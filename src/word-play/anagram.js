/**
 * Rhetorical word-play/anagram
 * =============================
 *
 * Functions related to anagrams.
 */
import isEqual from 'lodash/isEqual';
import frequencies from 'talisman/stats/frequencies';

/**
 * Variadic function taking n sequences and returning whether they are
 * anagrams or not.
 *
 * @param  {...mixed} sequences - The sequences to process.
 * @return {boolean}            - Whether the given sequences are anagram.
 *
 * @throws {Error} The function expects at least two arguments.
 *
 * @example
 *   // anagram('hello', 'lohel')   => true
 *   // anagram('hello', 'goodbye') => false
 */
export default function anagram(...sequences) {
  if (sequences.length < 2)
    throw Error('rhetorical/word-play/anagram: too few arguments.');

  const standardFrequencies = frequencies(sequences[0]);

  return sequences.slice(1).every(function(sequence) {
    return isEqual(frequencies(sequence), standardFrequencies);
  });
}
