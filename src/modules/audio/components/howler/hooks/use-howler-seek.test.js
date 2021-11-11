import { renderHook } from '@testing-library/react-hooks';
import { useHowlerSeek } from './use-howler-seek';
import { MOCK_HOWLER, SPY_HOWLER } from './use-howler-component.test.mock';

describe ('useHowlerSeek', () => {
  it ('should apply the state to howler', () => {
    const { result } = renderHook (() => useHowlerSeek (MOCK_HOWLER));
    expect (result.current).toBe (0);
    expect (SPY_HOWLER.seek).toHaveBeenNthCalledWith (1, 0);
  });
});
