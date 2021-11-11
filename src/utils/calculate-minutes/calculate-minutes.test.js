import { calculateMinutes } from './calculate-minutes';

describe ('calculateMinutes', () => {
  describe ('success story', () => {
    const response = calculateMinutes (60);

    it ('should return a string', () => {
      expect (typeof response).toBe ('string');
    });

    it ('should return the expected value', () => {
      expect (response).toBe ('1:00');
    });
  });

  describe ('arguments', () => {
    describe ('secs', () => {
      it ('should throw if not a number', () => {
        const request = () => calculateMinutes ('60');
        expect (request).toThrowError ();
      });
    });
  });
});
