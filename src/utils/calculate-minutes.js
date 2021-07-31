/**
 * @param {number} secs seconds input
 * @returns {string} minutes:seconds
 */
export function calculateMinutes (secs) {

    if (typeof secs !== 'number') throw new Error ('secs is not a number')

    const minutes = Math.floor (secs / 60)
    const seconds = Math.floor (secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${minutes}:${returnedSeconds}`

}