import {renderHook} from '@testing-library/react-hooks';
import {useHowlerDuration} from './use-howler-duration';
import {MOCK_HOWLER} from './use-howler-component.test.mock';

describe('useHowlerDuration', () => {
  it('should return the expected duration', () => {
    const {result} = renderHook(() => useHowlerDuration(MOCK_HOWLER));
    expect(result.current).toBe(300);
  });
});
