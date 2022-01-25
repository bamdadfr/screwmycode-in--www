/**
 * Calculates the minutes between two dates
 *
 * @param {number} secs - The number of seconds
 * @returns {string} - The number of minutes and seconds
 */
export function calculateMinutes(secs) {
  if (typeof secs !== 'number') {
    throw new Error('secs is not a number');
  }

  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${returnedSeconds}`;
}
