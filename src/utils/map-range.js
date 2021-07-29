/**
 * @see https://github.com/processing/p5.js/blob/main/src/math/calculation.js#L450
 * @param {number} n number to map
 * @param {number} start1 start of first range
 * @param {number} stop1 end of first range
 * @param {number} start2 start of second range
 * @param {number} stop2 end of second range
 * @returns {number} number in range
 */
export function mapRange (n, start1, stop1, start2, stop2) {

    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2

}