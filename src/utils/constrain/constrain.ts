/**
 * Constrain the value within the range.
 */
export function constrain(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
