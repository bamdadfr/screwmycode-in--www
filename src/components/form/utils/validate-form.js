/**
 * Check if the form is valid
 *
 * @param {string} value - The value to check
 * @typedef {(boolean|undefined)} IsValid
 * @typedef {(string|undefined)} Path
 * @returns {{IsValid,Path}} - The result of the validation
 */
export async function validateForm (value) {
  const response = {
    isValid: undefined,
    path: undefined,
  };

  try {
    // soundcloud
    const isSoundcloud = (await import ('soundcloud-scraper')).validateURL;
    if (isSoundcloud (value)) {
      const userAndId = value.replace ('https://soundcloud.com/', '');
      response.isValid = true;
      response.path = `/soundcloud/${userAndId}/1`;
      return response;
    }

    // youtube
    const ytdl = (await import ('ytdl-core')).default;
    const id = ytdl.getURLVideoID (value);
    response.isValid = true;
    response.path = `/youtube/${id}/1`;
    return response;
  } catch {
    response.isValid = false;
    return response;
  }
}
