import {renderHook} from '@testing-library/react-hooks';
import {useHowlerEnd} from './use-howler-end';

describe('useHowlerEnd', () => {
  it('should return a function', () => {
    const {result} = renderHook(() => useHowlerEnd());
    expect(typeof result.current).toBe('function');
  });
});
