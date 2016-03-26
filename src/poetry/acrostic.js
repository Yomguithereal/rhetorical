/**
 * Rhetorical poetry/acrostic
 * ===========================
 *
 * Functions related to acrostics.
 */
import first from 'lodash/head';
import words from 'lodash/words';

/**
 * Function taking raw text and returning its acrostic.
 *
 * @param  {string|function} type - The type of acrostic to return
 *                                  "letter", "word" or a custom method.
 * @param  {string}          text - The text to process.
 * @return {array}                - The acrostic.
 */
export default function acrostic(type, text) {

  // Splitting the text using line breaks
  text = text
    .split(/\n/)
    .filter(line => line);

  // Using a custom method
  if (typeof type === 'function')
    return text.map(type);

  return type === 'letter' ?
    text.map(first) :
    text.map(line => first(words(line)));
}

/**
 * Exporting specialized functions.
 */
const letterAcrostic = acrostic.bind(null, 'letter'),
      wordAcrostic = acrostic.bind(null, 'word');

export {letterAcrostic, wordAcrostic};
