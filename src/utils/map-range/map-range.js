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

    if (typeof n !== 'number') throw new Error ('n is not a number')

    if (typeof start1 !== 'number') throw new Error ('start1 is not a number')

    if (typeof stop1 !== 'number') throw new Error ('stop1 is not a number')

    if (typeof start2 !== 'number') throw new Error ('start2 is not a number')

    if (typeof stop2 !== 'number') throw new Error ('stop2 is not a number')

    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2

}