/**
 * Use typed arrays if we can
 */

const FastArray = typeof Uint32Array === 'undefined' ? Array : Uint32Array

/**
 * Bit vector
 */

function createBv (sizeInBits) {
  return new FastArray(Math.ceil(sizeInBits / 32))
}

function setBit (v, idx) {
  const r = idx % 32
  const pos = (idx - r) / 32

  v[pos] |= (1 << r)
}

function clearBit (v, idx) {
  const r = idx % 32
  const pos = (idx - r) / 32

  v[pos] &= ~(1 << r)
}

function getBit (v, idx) {
  const r = idx % 32
  const pos = (idx - r) / 32

  return !!(v[pos] & (1 << r))
}

/**
 * Exports
 */

export {
  createBv,
  setBit,
  clearBit,
  getBit
}
