/**
 * Rhetorical unit tests helpers
 * ==============================
 *
 */
import path from 'path';
import fs from 'fs';

/**
 * Function reading a textual resource as a string.
 */
export function resource(name) {
  const location = path.join(__dirname, 'resources', name);

  return fs.readFileSync(location, 'utf-8');
}
