import {renderHook} from '@testing-library/react-hooks';
import {useAutoplay} from './use-autoplay';

describe('useAutoplay', () => {
  describe('autoplay', () => {
    it('should default to false', () => {
      const {result} = renderHook(() => useAutoplay());
      expect(result.current.autoplay).toBe(false);
    });
  });
});
