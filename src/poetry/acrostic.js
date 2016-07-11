/**
 * Rhetorical poetry/acrostic
 * ===========================
 *
 * Functions related to acrostics.
 */
import first from 'lodash/head';
import words from 'talisman/tokenizers/words/naive';
import {default as lineTokenizer} from 'talisman/tokenizers/lines/naive';

/**
 * Function taking raw text and returning its acrostic.
 *
 * @param  {string|function} type - The type of acrostic to return
 *                                  "letter", "word" or a custom method.
 * @param  {string}          text - The text to process.
 * @return {array}                - The acrostic.
 */
export default function acrostic(type, text) {

  // Tokenizing the lines & dropping useless empty lines
  const lines = lineTokenizer(text)
    .filter(line => line);

  // Using a custom method
  if (typeof type === 'function')
    return lines.map(type);

  return type === 'letter' ?
    lines.map(first) :
    lines.map(line => first(words(line)));
}

/**
 * Exporting specialized functions.
 */
const letterAcrostic = acrostic.bind(null, 'letter'),
      wordAcrostic = acrostic.bind(null, 'word');

export {letterAcrostic, wordAcrostic};
