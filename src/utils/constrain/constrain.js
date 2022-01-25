/**
 * Constrain the value within the range.
 *
 * @param {number} value - The value to constrain.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} The constrained value.
 */
export function constrain(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
