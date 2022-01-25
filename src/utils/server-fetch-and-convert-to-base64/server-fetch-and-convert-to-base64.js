const https = require('https');

/**
 * @description Server fetches and encodes an image to base64
 * @param {string} url - The url of the image to encode
 * @returns {Promise<string>} - The base64 encoded image
 */
export function serverFetchAndConvertToBase64(url) {
  return new Promise((resolve) => {
    let body;

    https.get(
      url,
      (response) => {
        response.setEncoding('base64');

        body = 'data:' + response.headers['content-type'] + ';base64,';

        response.on('data', (data) => {
          body += data;
        });

        response.on('end', () => {
          resolve(body);
        });
      },
    )
      .on('error', () => {
        resolve();
      });
  });
}
