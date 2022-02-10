interface ValidateForm {
  isValid: boolean;
  path: string;
}

export async function validateForm(value: string): Promise<ValidateForm> {
  const response = {
    isValid: undefined,
    path: undefined,
  };

  try {
    // soundcloud
    const isSoundcloud = (await import('soundcloud-scraper')).Util.validateURL;
    if (isSoundcloud(value)) {
      const userAndId = value.replace('https://soundcloud.com/', '');

      response.isValid = true;
      response.path = `/soundcloud/${userAndId}/1`;

      return response;
    }

    // youtube
    const ytdl = (await import('ytdl-core')).default;
    const id = ytdl.getURLVideoID(value);

    response.isValid = true;
    response.path = `/youtube/${id}/1`;

    return response;
  } catch {
    response.isValid = false;

    return response;
  }
}
