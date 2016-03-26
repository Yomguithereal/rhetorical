/**
 * Rhetorical word-play/contrepet
 * ===============================
 *
 * Functions related to contrepèteries.
 */
import anagram from './anagram';
import cmu from 'cmu-pronouncing-dictionary';

/**
 * Variadic function taking n sequences of tokens and returning whether they
 * are contrepets.
 *
 * @param  {object}   dict      - The pronounciation dictionary to use (will
 *                                default to CMU).
 * @param  {...array} sequences - The sequences to process.
 * @return {boolean}            - Whether the given sequences are contrepets.
 */
export default function contrepet(dict, ...sequences) {
  dict = dict || cmu;

  const phonetic = sequences.map(tokens => {
    return tokens
      .map(token => dict[token.toLowerCase()])
      .filter(token => token)
      .join(' ')
      .split(/\s+/);
  });

  return anagram(...phonetic);
}
