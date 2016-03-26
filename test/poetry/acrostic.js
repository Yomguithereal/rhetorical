/**
 * Rhetorical poetry/acrostic tests
 * =================================
 *
 */
import assert from 'assert';
import {resource} from '../helpers';
import acrostic, {letterAcrostic, wordAcrostic} from '../../src/poetry/acrostic';

describe('acrostic', function() {

  it('should produce letter acrostics.', function() {
    const horace = resource('acrostics/horace.txt'),
          alice = resource('acrostics/alice.txt');

    assert.deepEqual(
      letterAcrostic(horace),
      'SALECUL'.split('')
    );

    assert.deepEqual(
      letterAcrostic(alice),
      'ALICEPLEASANCELIDDELL'.split('')
    );
  });

  it('should produce word acrostics.', function() {
    const grivois = resource('acrostics/grivois.txt');

    assert.deepEqual(
      wordAcrostic(grivois),
      ['Quand', 'Voulez', 'Vous', 'Que', 'Je', 'Couche', 'Avec', 'Vous']
    );
  });

  it('should be possible to use a custom method.', function() {
    const method = string => string.slice(0, 3),
          months = resource('acrostics/months.txt');

    assert.deepEqual(
      acrostic(method, months),
      ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    );
  });
});
