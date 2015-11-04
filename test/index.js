/**
 * Imports
 */

import test from 'tape'
import {createBv, getBit, setBit} from '../src'

/**
 * Tests
 */

test('should work', t => {
  const bv = createBv(8)

  setBit(bv, 3)

  t.equal(getBit(bv, 3), true)
  t.equal(getBit(bv, 4), false)
  t.end()
})
