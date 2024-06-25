/**
 * Calculates seconds to minutes + seconds
 * @param secs
 */
export function calculateMinutes(secs: number): string {
  if (typeof secs !== 'number') {
    throw new Error('secs is not a number');
  }

  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${returnedSeconds}`;
}
