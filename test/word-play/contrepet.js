/**
 * Rhetorical word-play/contrepet tests
 * =====================================
 *
 */
import assert from 'assert';
import contrepet from '../../src/word-play/contrepet';
import words from 'lodash/words';

describe('contrepet', function() {

  it('should be able to detect simple contrepets.', function() {
    const tests = [
      [
        'You sir are a shining wit!',
        'You sir are a whining shit!'
      ],
      [
        'Lack of pies',
        'Pack of lies'
      ],
      [
        'Wave the sails',
        'Save the whales'
      ]
    ];

    tests.forEach(function([one, two]) {
      assert(contrepet(null, words(one), words(two)), `${one} => ${two}`);
    });
  });
});
