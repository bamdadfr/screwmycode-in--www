interface ValidateForm {
  isValid: boolean;
  path: string;
}

export async function validateForm(value: string): Promise<ValidateForm> {
  const response: ValidateForm = {
    isValid: false,
    path: '',
  };

  try {
    // soundcloud
    const isSoundcloud = (await import('soundcloud-scraper')).Util.validateURL;
    if (isSoundcloud(value)) {
      const artistTrack = value.split('https://soundcloud.com/')[1];

      response.isValid = true;
      response.path = `/soundcloud/${artistTrack}/1`;

      return response;
    }

    const isBandcamp =
      value.includes('https://') && value.includes('bandcamp.com/track');

    if (isBandcamp) {
      const [artist, name] = value
        .split('https://')[1]
        .split('.bandcamp.com/track/');

      response.isValid = true;
      response.path = `/bandcamp/${artist}/${name}/1`;

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
