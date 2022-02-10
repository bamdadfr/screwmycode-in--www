import {mapRange} from './map-range';

describe('mapRange', () => {
  describe('success story', () => {
    const response = mapRange(0.5, 0, 1, 0, 100);

    it('should return a number', () => {
      expect(typeof response).toBe('number');
    });

    it('should return the expected value', () => {
      expect(response).toBe(50);
    });
  });

  describe('arguments', () => {
    describe('n', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const request = () => mapRange('0.5', 0, 1, 0, 100);

      it('should throw if not a number', () => {
        expect(request).toThrowError();
      });
    });

    describe('start1', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const request = () => mapRange(0.5, '0', 1, 0, 100);

      it('should throw if not a number', () => {
        expect(request).toThrowError();
      });
    });

    describe('start2', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const request = () => mapRange(0.5, 0, '1', 0, 100);

      it('should throw if not a number', () => {
        expect(request).toThrowError();
      });
    });

    describe('start2', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const request = () => mapRange(0.5, 0, 1, '0', 100);

      it('should throw if not a number', () => {
        expect(request).toThrowError();
      });
    });

    describe('stop2', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const request = () => mapRange(0.5, 0, 1, 0, '100');

      it('should throw if not a number', () => {
        expect(request).toThrowError();
      });
    });
  });
});
