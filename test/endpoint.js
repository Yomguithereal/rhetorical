/**
 * Rhetorical unit tests endpoint
 * ===============================
 *
 */
describe('poetry', function() {
  require('./poetry/acrostic.js');
});

describe('word-play', function() {
  require('./word-play/anagram.js');
  require('./word-play/contrepet.js');
  require('./word-play/palindrome.js');
});
