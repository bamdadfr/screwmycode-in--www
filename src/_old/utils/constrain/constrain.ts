/**
 * Constrain the value within the range.
 * @param value
 * @param min
 * @param max
 */
export function constrain(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
