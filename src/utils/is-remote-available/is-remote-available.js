import ky from 'ky';

/**
 * @param {string} url - The URL to check.
 * @returns {Promise<boolean>} true if the remote is available
 */
export async function isRemoteAvailable(url) {
  try {
    await ky.head(url);
    return true;
  } catch {
    return false;
  }
}
