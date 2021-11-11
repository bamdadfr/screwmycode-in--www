import {
  getUrlWithProxy,
  developmentProxy,
  productionProxy,
} from './get-url-with-proxy';

const url = 'https://mytestingurl.com';

describe ('getUrlWithProxy', () => {
  describe ('success story', () => {
    describe ('development environment', () => {
      const response = getUrlWithProxy (url);

      it ('should return a string', () => {
        expect (typeof response).toBe ('string');
      });

      it ('should return the expected value', () => {
        expect (response).toBe (`${developmentProxy}/${url}`);
      });
    });

    describe ('production environment', () => {
      process.env.NODE_ENV = 'production';

      const response = getUrlWithProxy (url);

      it ('should return a string', () => {
        expect (typeof response).toBe ('string');
      });

      it ('should return the expected value', () => {
        expect (response).toBe (`${productionProxy}/${url}`);
      });
    });
  });

  describe ('arguments', () => {
    describe ('url', () => {
      it ('should throw if not a string', () => {
        const request = () => getUrlWithProxy (1);
        expect (request).toThrowError ();
      });
    });
  });
});
