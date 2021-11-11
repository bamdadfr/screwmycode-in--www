import { renderHook } from '@testing-library/react-hooks';
import { useHowlerSpeed } from './use-howler-speed';
import { MOCK_HOWLER, SPY_HOWLER } from './use-howler-component.test.mock';

describe ('useHowlerSpeed', () => {
  it ('should call .rate with default speed', () => {
    const { result } = renderHook (() => useHowlerSpeed (MOCK_HOWLER));
    expect (result.current).toBe (1);
    expect (SPY_HOWLER.rate).toHaveBeenNthCalledWith (1, 1);
  });
});
