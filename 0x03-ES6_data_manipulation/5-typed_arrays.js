/**
 * Func creates buffer array with given position set to given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
    if (position >= length) {
      throw new Error('Position outside range');
    }
    const buf = new DataView(new ArrayBuffer(length), 0, length);
    buf.setInt8(position, value);
    return buf;
  }