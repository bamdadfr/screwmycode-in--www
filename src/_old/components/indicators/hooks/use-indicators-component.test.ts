import {renderHook} from '@testing-library/react-hooks';

import {useIndicatorsComponent} from './use-indicators-component';

describe('useIndicatorsComponent', () => {
  describe('percentage', () => {
    it('should default to 0.0', () => {
      const {result} = renderHook(() => useIndicatorsComponent());
      expect(result.current.percentage).toBe('0.0');
    });
  });

  describe('semitones', () => {
    it('should default to 0.0', () => {
      const {result} = renderHook(() => useIndicatorsComponent());
      expect(result.current.semitones).toBe('0.0');
    });
  });
});
