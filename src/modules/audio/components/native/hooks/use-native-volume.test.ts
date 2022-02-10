import {renderHook} from '@testing-library/react-hooks';
import {useNativeVolume} from './use-native-volume';
import {MOCK_AUDIO, SPY_AUDIO} from './use-native-component.test.mock';

afterEach(() => jest.resetAllMocks());

describe('useNativeVolume', () => {
  describe('volume', () => {
    it('should default to 1', () => {
      renderHook(() => useNativeVolume(MOCK_AUDIO));
      expect(MOCK_AUDIO.volume).toBe(0.7);
    });
  });

  describe('events', () => {
    it('should handle 1 event', () => {
      expect(SPY_AUDIO.addEventListener).toHaveBeenCalledTimes(0);
      expect(SPY_AUDIO.removeEventListener).toHaveBeenCalledTimes(0);

      const {unmount} = renderHook(() => useNativeVolume(MOCK_AUDIO));
      expect(SPY_AUDIO.addEventListener).toHaveBeenCalledTimes(1);
      expect(SPY_AUDIO.removeEventListener).toHaveBeenCalledTimes(0);

      unmount();
      expect(SPY_AUDIO.removeEventListener).toHaveBeenCalledTimes(1);
    });
  });
});
