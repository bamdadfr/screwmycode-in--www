import {renderHook} from '@testing-library/react-hooks';
import {useHowlerVolume} from './use-howler-volume';
import {MOCK_HOWLER, SPY_HOWLER} from './use-howler-component.test.mock';

describe('useHowlerVolume', () => {
  it('should call .volume with default state', () => {
    const {result} = renderHook(() => useHowlerVolume(MOCK_HOWLER));
    expect(result.current).toBe(0.7);
    expect(SPY_HOWLER.volume).toHaveBeenNthCalledWith(1, 0.7);
  });
});
